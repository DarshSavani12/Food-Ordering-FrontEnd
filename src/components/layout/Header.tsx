'use client';
import Link from 'next/link';

export default function Header() {
  const handleScrollTo = (targetId: any) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 10;
      const position = targetElement.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          ST PIZZA
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <a href="#about" onClick={() => handleScrollTo('about')}>
          About
        </a>
        <a href="#contact" onClick={() => handleScrollTo('contact')}>
          Contact
        </a>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={'/login'}>Login</Link>
        <Link
          className="bg-gradient-to-tr from-orange-500 to-red-600 shadow-lg rounded-full text-white px-8 py-2"
          href={'/register'}
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
