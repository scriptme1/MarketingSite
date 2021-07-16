import React from 'react';
import { InfoSection } from '../../components';
import { homeObjFour, homeObjOne, homeObjTwo } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Products;
