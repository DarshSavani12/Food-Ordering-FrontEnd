'use client';
import { Button } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { ProfileDropdown } from '@food/components/layout';

export default function Header() {
  const session = useSession();
  const status = session.status;
  const userData = session.data?.user;
  const userName = userData?.name || userData?.email || 'No Name';
  const userProfileImg =
    userData?.image || 'https://images.unsplash.com/broken';

  return (
    <header className="flex items-center justify-between sticky top-0 bg-white h-14 z-50">
      <nav className="flex gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          ST PIZZA
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === 'authenticated' && (
          <>
            <ProfileDropdown
              userName={userName}
              userProfileImg={userProfileImg}
            />
          </>
        )}
        {status === 'unauthenticated' && (
          <>
            <Link href={'/login'}>Login</Link>
            <Link
              className="bg-gradient-to-tr from-orange-500 to-red-600 shadow-lg rounded-full text-white px-8 py-2"
              href={'/register'}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
