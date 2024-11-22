
export interface Special {
  count: number;
  price: number;
}

export interface StoreItem {
  id: number;
  item_name: string;
  price: number;
  specials?: Special;
}

export interface BasketItem {
  count: number;
  totalPrice: number;
}

export interface BasketItems {
  [key: string]: BasketItem;
}
