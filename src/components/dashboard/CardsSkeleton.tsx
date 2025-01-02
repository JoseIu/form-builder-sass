import { Skeleton } from '../ui/skeleton';

export const CardsSkeleton = () => {
  return (
    <div className="card-container">
      <Skeleton className="h-[150px] rounded-md" />
      <Skeleton className="h-[150px] rounded-md" />
      <Skeleton className="h-[150px] rounded-md" />
      <Skeleton className="h-[150px] rounded-md" />
    </div>
  );
};
