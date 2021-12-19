import React, { useContext } from 'react'
import { NativeProductContext } from '../context/NativeProductContext'
import { Loader } from './Loader'
import { ProductItem } from './ProductItem'

export const ProductList = () => {
  const {sorted, loading} = useContext(NativeProductContext)

  const productsLayout = !loading ? 
  sorted.map((product, i) => {
    return <ProductItem key={i} product={{title: product.title, price: product.price, image: product.image, type: product.type, id: product._id}} />
})
  :
  <Loader />
  return (
    <ul className="products-list main-product-list">
      {productsLayout}
    </ul>
  )
}
