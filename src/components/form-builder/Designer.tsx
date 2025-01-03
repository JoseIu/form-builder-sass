'use client';
import { useDesigner } from '@/hooks/useDesigner';
import { ElementsType, FormElements } from '@/interfaces/FormElements';
import { DragEndEvent, useDndMonitor, useDroppable } from '@dnd-kit/core';
import { v4 as uuID } from 'uuid';
import { DesignerAside } from './DesignerAside';
import { DesignerElementWrapper } from './DesignerElementWrapper';

export const Designer = () => {
  const { elements, addElement } = useDesigner();
  const droppable = useDroppable({
    id: 'designer-drop-are',
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd(event: DragEndEvent) {
      const { active, over } = event;

      if (!active || !over) return;
      const isDesignerBtnElement = active.data?.current?.isDeisgnerBtnElement;

      if (isDesignerBtnElement) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(uuID());

        addElement(0, newElement);
      }
    },
  });
  return (
    <div className="wrapper designer-container p-2">
      <div ref={droppable.setNodeRef} className="bg-background rounded-sm p-2">
        {!droppable.isOver && !elements.length && (
          <span className="w-full h-full flex items-center justify-center text-3xl">Drop Here</span>
        )}

        {droppable.isOver && <div className="h-20 rounded-md bg-primary/20"></div>}

        {elements.map((element) => (
          <DesignerElementWrapper key={element.id} element={element} />
        ))}
      </div>

      <DesignerAside />
    </div>
  );
};
