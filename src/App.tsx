import { useState } from 'react'
import './App.css'

const STORE_ITEMS: any[] = [
  { id: 1, item_name: 'A', price: 50, specials: { count: 3, price: 130 } },
  { id: 2, item_name: 'B', price: 30, specials: { count: 2, price: 45 } },
  { id: 3, item_name: 'C', price: 20 },
  { id: 4, item_name: 'D', price: 15 },
]

function App() {
  const [basketItems, setBasketItems] = useState({})


  const formatPrice = (pence: number): string => {
    const pounds = Math.floor(pence / 100)
    const remainingPence = pence % 100
    return `£${pounds}.${remainingPence.toString().padStart(2, '0')}`
  }




  return (
    <>
      <h1>Store Checout System CDL</h1>
      <div className="store-container">
        <div className="items-container">
          {STORE_ITEMS.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-card-image">{item.item_name}</div>
              <div className="item-card-content">
                <h3>Item {item.item_name}</h3>
                <div className="">
                  <p className="item-price">{formatPrice(item.price)}</p>
                  {item.specials && (
                    <p className="special-offer">
                      Special: {item.specials.count} for {formatPrice(item.specials.price)}
                    </p>
                  )}
                </div>
              </div>
              <button className="button">Add to Basket</button>
            </div>
          ))}
        </div>

        <div className="basket-container">
          <h2>Your Basket</h2>
          <div className="basket-items">
            <div className="basket-item">
              <div className="item-info">
                <span>Item A</span>
                <div className="update-basket-item">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
              <span className="item-total">{formatPrice(50)}</span>
            </div>
            <p className="empty">Your basket is empty</p>
          </div>
          <div className="total">
            <h3>Total: {formatPrice(550)}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
