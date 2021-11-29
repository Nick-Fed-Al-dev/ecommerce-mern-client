import { useCallback, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import './css/CardFooter.css'

export const CardFooter = () => {
  const {cardTotalPrice, setCardTotalPrice, cardProducts} = useContext(UserContext)

  const totalPriceCountHandler = useCallback(async() => {
    const price = cardProducts.reduce((total, curr) => total + curr.price, 0)
    setCardTotalPrice(price)
  }, [cardProducts, setCardTotalPrice])

  useEffect(() => {
    totalPriceCountHandler()
  }, [totalPriceCountHandler, ])

  return (
    <div className="card-footer">
      <div className="total-price">Total: {cardTotalPrice + '$'}</div>
      <button className="btn blue pay-btn">Buy</button>
    </div>
  )
}