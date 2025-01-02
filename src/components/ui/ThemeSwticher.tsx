'use client';

import { useTheme } from 'next-themes';
import { IoMoonOutline, IoSunnyOutline, IoTvOutline } from 'react-icons/io5';
import { Tabs, TabsList, TabsTrigger } from './tabs';

export const ThemeSwticher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="p-1 border rounded-md flex items-center gap-2">
        <TabsTrigger value="light" onClick={() => setTheme('light')}>
          <IoSunnyOutline className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
          <IoMoonOutline className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme('system')}>
          <IoTvOutline className="w-4 h-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
