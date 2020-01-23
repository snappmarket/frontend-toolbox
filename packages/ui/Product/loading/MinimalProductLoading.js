import React from 'react';
import { BoxSkeleton } from 'components/Global/Skeleton';

const MinimalProductLoading = () => (
  <div>
    <BoxSkeleton width="100%" height={15} />
    <BoxSkeleton className="mt-1" width="100%" height={1.5} />
    <div className="justify-center mt-1">
      <BoxSkeleton width="50%" height={1.5} />
    </div>
    <BoxSkeleton className="mt-1" width="100%" height={3.5} />
  </div>
);

export default MinimalProductLoading;
