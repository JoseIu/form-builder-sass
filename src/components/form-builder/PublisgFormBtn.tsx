import { IoCloudUploadOutline } from 'react-icons/io5';
import { Button } from '../ui/button';

export const PublisgFormBtn = () => {
  return (
    <Button variant={'outline'} className="bg-primary/95 text-secondary">
      Publish
      <IoCloudUploadOutline />
    </Button>
  );
};
