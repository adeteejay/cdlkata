import { useState } from 'react'
import './App.css'
import { BasketItems, StoreItem } from './types'

const STORE_ITEMS: any[] = [
  { id: 1, item_name: 'A', price: 50, specials: { count: 3, price: 130 } },
  { id: 2, item_name: 'B', price: 30, specials: { count: 2, price: 45 } },
  { id: 3, item_name: 'C', price: 20 },
  { id: 4, item_name: 'D', price: 15 },
]

function App() {
  const [basketItems, setBasketItems] = useState<BasketItems>({})


  const formatPrice = (pence: number): string => {
    const pounds = Math.floor(pence / 100)
    const remainingPence = pence % 100
    return `£${pounds}.${remainingPence.toString().padStart(2, '0')}`
  }



  const addToBasket = (item: StoreItem): void => {
    console.log('setBasketItems')
    setBasketItems(prevItems => {
      const currentCount = (prevItems[item.item_name]?.count || 0) + 1;
      return {
        ...prevItems,
        [item.item_name]: {
          count: currentCount,
          totalPrice: item.price * currentCount
        }
      };
    });
  };

  const removeFromBasket = (item: StoreItem): void => {
    console.log('remove from baseket')
    setBasketItems(prevItems => {
      if (!prevItems[item.item_name] || prevItems[item.item_name].count <= 0) return prevItems;

      const currentCount = prevItems[item.item_name].count - 1;
      if (currentCount === 0) {
        const newItems = { ...prevItems };
        delete newItems[item.item_name];
        return newItems;
      }

      return {
        ...prevItems,
        [item.item_name]: {
          count: currentCount,
          totalPrice: item.price * currentCount
        }
      };
    });
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
              <button className="button"
                onClick={() => addToBasket(item)}>Add to Basket</button>
            </div>
          ))}
        </div>

        <div className="basket-container">
          <h2>Your Basket</h2>

          <div className="basket-items">
            {Object.entries(basketItems).map(([itemName, details]) => {
              const item = STORE_ITEMS.find(i => i.item_name === itemName)!;
              return (
                <div key={item.id} className="basket-item">
                  <div className="basket-item-info">
                    <span>Item {item.item_name}</span>
                    <div className="quantity-controls">
                      <button onClick={() => removeFromBasket(item)}>-</button>
                      <span>{details.count}</span>
                      <button onClick={() => addToBasket(item)}>+</button>
                    </div>
                  </div>
                  <span className="item-total">{formatPrice(details.totalPrice)}</span>
                </div>
              );
            })}
            {Object.keys(basketItems).length === 0 && (
              <p className="empty">Your basket is empty</p>
            )}
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
