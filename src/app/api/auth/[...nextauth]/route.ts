import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import mongoose from 'mongoose';
import { User } from '@food/app/models/User';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@food/libs/mongoConnect';

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      id: 'google',
      name: 'Google',
      clientId: googleClientId || '',
      clientSecret: googleClientSecret || '',
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@test.com  ',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password }: string = credentials;
        const mongodbUrl = process.env.MONGO_URL;
        mongodbUrl && mongoose.connect(mongodbUrl);
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        if (passwordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
});
export { handler as GET, handler as POST };
