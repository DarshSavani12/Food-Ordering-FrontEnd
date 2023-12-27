'use client';
import { useAppDispatch, useAppSelector } from '@food/state/store';
import Image from 'next/image';
import React from 'react';
import {
  getCreatingUser,
  getEmail,
  getError,
  getPassword,
  getUserCreated,
  setCreatingUser,
  setEmail,
  setError,
  setPassword,
  setUserCreated,
} from '@food/app/data';
import { Button, Input, Link } from '@nextui-org/react';

const RegistrationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const email: string = useAppSelector(getEmail);
  const password: string = useAppSelector(getPassword);
  const creatingUser: boolean = useAppSelector(getCreatingUser);
  const userCreated: boolean = useAppSelector(getUserCreated);
  const error: boolean = useAppSelector(getError);

  async function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(setCreatingUser(true));
    dispatch(setError(false));
    dispatch(setUserCreated(false));

    const response = await fetch('http://localhost:8080/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      dispatch(setUserCreated(true));
    } else {
      dispatch(setError(true));
    }
    dispatch(setCreatingUser(false));
  }

  return (
    <section className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded shadow-md w-96 ">
        <h2 className="text-2xl font-bold mb-9">Register</h2>
        {userCreated && (
          <div className="my-4 text-center">
            User Created.
            <br /> Now you can{' '}
            <Link className="underline" href={'/login'}>
              Login &raquo;
            </Link>
          </div>
        )}
        {error && (
          <div className="my-4 text-center">
            An Error has occured.
            <br /> Please try again later
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              isRequired
              key="outside"
              type="email"
              label="Email"
              labelPlacement="outside"
              className="mt-4"
              value={email}
              onChange={(event) => dispatch(setEmail(event.target.value))}
              disabled={creatingUser}
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
              onChange={(event) => dispatch(setPassword(event.target.value))}
              disabled={creatingUser}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded text-medium font-semibold"
            disabled={creatingUser}
          >
            Register
          </Button>
          <Button className="w-full flex gap-5 justify-center mt-4 p-2 rounded bg-transparent">
            <Image src={'/google.png'} alt={''} width={24} height={24} />
            Login with Google
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationPage;
