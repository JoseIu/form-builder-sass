import { IoSaveOutline } from 'react-icons/io5';
import { Button } from '../ui/button';

export const SaveFormBtn = () => {
  return (
    <Button variant={'outline'}>
      Save
      <IoSaveOutline />
    </Button>
  );
};
