'use client';
import { FormElementInstance } from '@/interfaces/FormElements';
import { createContext, useState } from 'react';

type DesisgnerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesisgnerContextType | null>(null);

type Props = {
  children: React.ReactNode;
};
export const DesignerProvider = ({ children }: Props) => {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  return <DesignerContext.Provider value={{ elements, addElement }}>{children}</DesignerContext.Provider>;
};
