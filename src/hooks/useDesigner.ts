import { DesignerContext } from '@/app/context/DesignerContext';
import { useContext } from 'react';

export const useDesigner = () => {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error('useDesigner must be used within a DesignerProvider');
  }
  return context;
};
