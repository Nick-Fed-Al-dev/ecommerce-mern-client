import { useContext, useState } from 'react'
import { NativeProductContext } from '../context/NativeProductContext'
import './css/SortPanel.css'

export const SortPanel = () => {
  const {products , setSorted} = useContext(NativeProductContext) 
  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: 10000
  })

  const searchHandler = e => {
    const filtred = products.filter(product => product.title.includes(e.target.value))
    setSorted(filtred)
  }

  const priceRangeChangeHandler = e => {
    const target = e.target
    const newValue = {...priceRange, [target.name]: target.value}
    setPriceRange(newValue)
  }

  const productListPriceFilterHandler = () => {
    const filterProducts = (productsArg, minPrice, maxPrice) => {
      return productsArg
      .filter(product => product.price >= minPrice)
      .filter(product => product.price <= maxPrice)
    }
    const changeProducts = () => filterProducts(products, Number(priceRange.minPrice), Number(priceRange.maxPrice))
    setSorted(changeProducts)
  }

  return (
    <div className="sort-panel">
      <div className="price-filter">
        <div className="sort-type">Price: </div> 
          <div className="price-sort">
            from &nbsp;
            <input name="minPrice" value={priceRange.minPrice} onChange={priceRangeChangeHandler} onBlur={productListPriceFilterHandler} /> 
            &nbsp; to &nbsp; 
            <input name="maxPrice" value={priceRange.maxPrice} onChange={priceRangeChangeHandler} onBlur={productListPriceFilterHandler} /> 
          </div>
      </div>
      <div className="search">
        <div className="search-title">Search: </div>
        <input onChange={searchHandler}/>
      </div>
    </div>
  )
}