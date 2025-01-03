'use client';
import { DndContext } from '@dnd-kit/core';
import { Form } from '@prisma/client';
import { Designer } from './Designer';
import { DragOverLayWrapper } from './DragOverLayWrapper';
import { PreviewDialogBtn } from './PreviewDialogBtn';
import { PublisgFormBtn } from './PublisgFormBtn';
import { SaveFormBtn } from './SaveFormBtn';

type Props = {
  form: Form;
};

export const FormBuilder = ({ form }: Props) => {
  return (
    <DndContext>
      <section className="form-builder w-full h-dvh">
        <nav className="border-b box-shadow">
          <div className="wrapper flex items-center justify-between p-2">
            <h2 className="truncate font-medium flex items-center gap-2">
              <span className="text-muted-foreground">Form:</span>
              {form.name}
            </h2>

            <ul className="flex items-center gap-2">
              <li>
                <PreviewDialogBtn />
              </li>
              {!form.published && (
                <>
                  <li>
                    <SaveFormBtn />
                  </li>
                  <li>
                    <PublisgFormBtn />
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>

        <div className="flex flex-grow relative bg-accent w-full form-builder bg-[url(/paper.svg)]">
          <Designer />
        </div>
      </section>
      <DragOverLayWrapper />
    </DndContext>
  );
};
