import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '@food/app/models/User';

dotenv.config();

export async function POST(req: any) {
  const mongodbUrl = process.env.MONGO_URL;

  if (!mongodbUrl) {
    console.error('MongoDB URL is not defined in the environment variables.');
    return Response.json('error');
  }

  mongoose.connect(mongodbUrl);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  const body = await req.json();
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
