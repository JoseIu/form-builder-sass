import { getFormById } from '@/actions/formAction';
import { FormBuilder } from '@/components/form-builder/FormBuilder';

type Props = {
  params: Promise<{ id: string }>;
};
const BuilderPage = async ({ params }: Props) => {
  const form = await getFormById((await params).id);
  if (!form) throw new Error('Form not found');
  return <FormBuilder form={form} />;
};

export default BuilderPage;
