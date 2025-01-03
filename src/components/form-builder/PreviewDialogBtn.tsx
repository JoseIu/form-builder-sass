import { IoEyeOutline } from 'react-icons/io5';
import { Button } from '../ui/button';

export const PreviewDialogBtn = () => {
  return (
    <Button variant={'outline'}>
      Preview
      <IoEyeOutline />
    </Button>
  );
};
