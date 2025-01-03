import { FormElementInstance, FormElements } from '@/interfaces/FormElements';

type Props = {
  element: FormElementInstance;
};
export const DesignerElementWrapper = ({ element }: Props) => {
  const DesignerElement = FormElements[element.type].designerComponent;
  return <DesignerElement />;
};
