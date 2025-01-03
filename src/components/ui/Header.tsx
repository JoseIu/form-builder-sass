'use client';

import { UserButton } from '@clerk/nextjs';
import { ThemeSwticher } from './ThemeSwticher';

export const Header = () => {
  return (
    <header className="w-full p-4 border-b box-shadow">
      <div className="wrapper flex justify-between items-center">
        <ThemeSwticher />
        <UserButton afterSwitchSessionUrl="/sign-in" />
      </div>
    </header>
  );
};
