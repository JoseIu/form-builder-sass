import { ElementsType, FormElements } from '@/interfaces/FormElements';
import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import { SideBarElementDragOverlay } from './SideBarElement';

export const DragOverLayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel() {
      setDraggedItem(null);
    },
    onDragEnd() {
      setDraggedItem(null);
    },
  });
  if (!draggedItem) return null;

  let node = <div>No drag overlaay</div>;
  const isSideBarBtnElement = draggedItem?.data.current?.isDeisgnerBtnElement;

  if (isSideBarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;

    node = <SideBarElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
};
