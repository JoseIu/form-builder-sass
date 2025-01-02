import { CardContainer } from '@/components/dashboard/card-content/CardContainer';
import { CardsSkeleton } from '@/components/dashboard/CardsSkeleton';
import { Forms } from '@/components/dashboard/Forms';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<CardsSkeleton />}>
        <CardContainer />
      </Suspense>

      <Forms />
    </div>
  );
}
