'use client';
import { IoTextOutline } from 'react-icons/io5';
import { ElementsType, FormElement } from './FormElements';

const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    estraAtributes: {
      label: 'Text Field',
      helperText: 'Helper text',
      required: true,
      placeHolder: 'Place holder',
    },
  }),
  designerBtnElement: {
    icon: IoTextOutline,
    label: 'Text Label',
  },
  designerComponent: () => <div>TextField component</div>,
  formComponent: () => <div>Form component</div>,
  propertiesComponent: () => <div>Properties component</div>,
};
