// app/StoreProvider.tsx
'use client';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const storeRef = useRef(makeStore());

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
