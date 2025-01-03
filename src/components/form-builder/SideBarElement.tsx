import { FormElement } from '@/interfaces/FormElements';
import { useDraggable } from '@dnd-kit/core';
import { Button } from '../ui/button';

type Props = {
  formElement: FormElement;
};
export const SideBarElement = ({ formElement }: Props) => {
  const { label, icon: Icon } = formElement.designerBtnElement;

  const draggable = useDraggable({
    id: `designer-btn${formElement.type}`,
    data: {
      type: formElement.type,
      isDeisgnerBtnElement: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      variant={'outline'}
      className="flex flex-col gap-2 w-20 h-20 cursor-grab"
    >
      <Icon size={40} className="w-8 h-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};
export const SideBarElementDragOverlay = ({ formElement }: Props) => {
  const { label, icon: Icon } = formElement.designerBtnElement;

  return (
    <Button variant={'outline'} className="flex flex-col gap-2 w-20 h-20 cursor-grab">
      <Icon size={40} className="w-8 h-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};
