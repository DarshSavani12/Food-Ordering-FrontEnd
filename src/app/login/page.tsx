'use client';
import { Button, Input, Link } from '@nextui-org/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@food/state/store';
import {
  app,
  getError,
  getLoading,
  getUserLoggedIn,
  setError,
  setLoading,
  setUserLoggedIn,
} from '@food/app/data';
import { signIn } from 'next-auth/react';

export default function Loginpage() {
  const dispatch = useAppDispatch();
  const LoginInProcess = useAppSelector(getLoading);
  const userLoggedIn = useAppSelector(getUserLoggedIn);
  const error = useAppSelector(getError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(setError(false));
    dispatch(setLoading(true));
    dispatch(setUserLoggedIn(false));
    await signIn('credentials', {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: '/',
    });
  }
  return (
    <section className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded shadow-md w-96 ">
        <h2 className="text-2xl font-bold mb-9">Login</h2>
        {error && (
          <div className="my-4 text-center">
            An Error has occured.
            <br /> Please try again later
          </div>
        )}
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-4">
            <Input
              isRequired
              key="outside"
              type="email"
              label="Email"
              labelPlacement="outside"
              className="mt-4"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={LoginInProcess}
            />
          </div>
          <div className="mt-8 mb-6">
            <Input
              isRequired
              key="outside"
              type="password"
              label="Password"
              labelPlacement="outside"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={LoginInProcess}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded text-medium font-semibold"
            disabled={LoginInProcess}
            isLoading={LoginInProcess}
          >
            Login
          </Button>
          <Button
            className="w-full flex gap-5 justify-center mt-4 p-2 rounded bg-transparent"
            onClick={() => {
              signIn('google', { callbackUrl: '/' });
            }}
          >
            <Image src={'/google.png'} alt={''} width={24} height={24} />
            Login with Google
          </Button>
        </form>
      </div>
    </section>
  );
}
