import React from 'react';
import { BoxSkeleton } from 'components/Global/Skeleton';

const VerticalProductLoading = () => (
  <div>
    <BoxSkeleton width="100%" height={15} />
    <div className="justify-end mt-1">
      <BoxSkeleton width="50%" height={1.5} />
    </div>
    <BoxSkeleton className="mt-1" width="100%" height={1.5} />
    <BoxSkeleton className="mt-1" width="50%" height={1.5} />
    <BoxSkeleton className="mt-1" width="100%" height={3.5} />
  </div>
);

export default VerticalProductLoading;
