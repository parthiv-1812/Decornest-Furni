import React from 'react'

import ProductDetails from './prduct-details'
import ProductDesc from './product-desc'
import ProductReleted from './product-releted'

export default function DecornestProductDetails() {
  return (
    <div>
      <ProductDetails/>
      <ProductDesc/>
      <ProductReleted/>
    </div>
  )
}
