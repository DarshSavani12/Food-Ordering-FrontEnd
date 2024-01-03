'use client';

import { Provider } from 'react-redux';
import store from '@food/state/store';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <NextUIProvider>{children}</NextUIProvider>
      </Provider>
    </SessionProvider>
  );
}
