import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import mongoose from 'mongoose';
import { User } from '@food/app/models/User';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      id: 'google',
      clientId:
        '978503722021-fa1kullc46dbckbk5lc1te4ss0hn8nmp.apps.googleusercontent.com',
      clientSecret: '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',
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
});
export { handler as GET, handler as POST };
