import { Schema, models, model } from 'mongoose';
import bcrypt from 'bcrypt';

const UserModel = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass: string) => {
        if (pass?.length < 5 || !pass?.length) {
          new Error('Passwords must be at least 5 characters');
          return false;
        }
      },
    },
  },
  { timestamps: true },
);

UserModel.post('validate', function (user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
});

export const User = models?.User || model('User', UserModel);
