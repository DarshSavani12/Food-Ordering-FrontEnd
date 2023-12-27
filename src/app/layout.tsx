import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@food/components/layout';
import StoreProvider from './provider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'ST PIZZA',
  description: 'Pizza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <StoreProvider>
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2023 All rights reserved
            </footer>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
