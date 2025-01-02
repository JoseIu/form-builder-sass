import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import { CreateFormBtn } from './CreateFormBtn';
import { FormCards } from './FormCards';

export const Forms = () => {
  return (
    <section>
      <h2 className="text-4xl">Your forms</h2>
      <div className="card-container">
        <CreateFormBtn />

        <Suspense fallback={<Skeleton />}>
          <FormCards />
        </Suspense>
      </div>
    </section>
  );
};
