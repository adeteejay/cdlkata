import { useState } from 'react'
import './App.css'
import { BasketItems, StoreItem } from './types'

const STORE_ITEMS: StoreItem[] = [
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
    setBasketItems(prevItems => {
      const currentCount = (prevItems[item.item_name]?.count || 0) + 1;
      return {
        ...prevItems,
        [item.item_name]: {
          count: currentCount,
          totalPrice: calculateTotalForItem(item, currentCount)
        }
      };
    });
  };

  const removeFromBasket = (item: StoreItem): void => {
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
          totalPrice: calculateTotalForItem(item, currentCount)
        }
      };
    });
  }

  const calculateTotalForItem = (item: StoreItem, count: number): number => {
    if (!item.specials) {
      return count * item.price;
    }
    const specialDeals = Math.floor(count / item.specials.count);
    const remainingItems = count % item.specials.count;
    return (specialDeals * item.specials.price) + (remainingItems * item.price);
  };


  const calculateTotalForAll = (): number => {
    return Object.values(basketItems).reduce((total, item) =>
      total + item.totalPrice, 0);
  };
  
  const calculateTotalDiscount = (): number => {
    return Object.entries(basketItems).reduce((totalSavings, [itemName, details]) => {
      const item = STORE_ITEMS.find(i => i.item_name === itemName)!
      const fullPrice = details.count * item.price 
      return totalSavings + (fullPrice - details.totalPrice) 
    }, 0)
  }

  return (
    <>
      <h1>Store Checout System CDL</h1>
      <div className="store-container">
        <div className="items-container">
          {STORE_ITEMS.map((item, index: number) => (
            <div key={item.id} className="item-card">
              <div className="item-card-image"><img src={'https://prd.place/10'+index} /></div>
              <div className="item-card-content">
                <h3>Item {item.item_name}</h3>
                <div className="price-container">
                  <p className="item-price">{formatPrice(item.price)}</p>
                  {item.specials && (
                    <p className="special-offer">
                      <span className="bold">Offer:</span> {item.specials.count} for {formatPrice(item.specials.price)}
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
            <h3>Total: {formatPrice(calculateTotalForAll())}</h3>
            <p>You saved: {formatPrice(calculateTotalDiscount())}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
