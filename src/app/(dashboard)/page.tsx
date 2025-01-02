import { CardContainer } from '@/components/dashboard/card-content/CardContainer';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CardContainer />
      </Suspense>
    </div>
  );
}
