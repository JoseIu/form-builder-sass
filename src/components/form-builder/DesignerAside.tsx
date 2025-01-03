import { FormElements } from '@/interfaces/FormElements';
import { SideBarElement } from './SideBarElement';

export const DesignerAside = () => {
  return (
    <aside className="bg-background rounded-md p-4">
      <SideBarElement formElement={FormElements.TextField} />
    </aside>
  );
};
