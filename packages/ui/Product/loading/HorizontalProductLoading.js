import React from 'react';
import { BoxSkeleton } from 'components/Global/Skeleton';

const HorizontalProductLoading = () => (
  <div className="align-center justify-center">
    <div style={{ width: '25%' }} className="pl-1">
      <BoxSkeleton height={15} width="100%" />
    </div>
    <div style={{ width: '35%' }} className="pl-1">
      <BoxSkeleton height={1.5} width="100%" />
      <BoxSkeleton className="mt-1" height={1.5} width="50%" />
    </div>
    <div style={{ width: '25%' }} className="pl-1">
      <BoxSkeleton height={3.5} width="100%" />
    </div>
    <div style={{ width: '15%' }}>
      <BoxSkeleton height={1.5} width="100%" />
      <BoxSkeleton className="mt-1" height={1.5} width="100%" />
    </div>
  </div>
);

export default HorizontalProductLoading;
