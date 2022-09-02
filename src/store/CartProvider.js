import { React, useReducer } from 'react';
import CartContext from './cart-context';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const existingAddItem = state.items.find((item) => {
        return item.id === action.item.id;
      });

      if (existingAddItem) {
        const addedItemsList = state.items.map((cartItem) => {
          return cartItem.id === action.item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + action.item.quantity,
              }
            : cartItem;
        });

        return { items: addedItemsList };
      }
      return { items: [...state.items, action.item] };

    case 'DECREMENT':
      const decrementedItemsList = state.items.map((cartItem) => {
        return cartItem.id === action.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          : cartItem;
      });
      return { items: decrementedItemsList };

    case 'CHANGE':
      const changedItemsList = state.items.map((cartItem) => {
        return cartItem.id === action.item.id
          ? {
              ...cartItem,
              quantity: action.item.quantity,
            }
          : cartItem;
      });

      return { items: changedItemsList };

    case 'REMOVE':
      const removedItemList = state.items.filter((cartItem) => {
        return cartItem.id !== action.id;
      });

      return { items: removedItemList };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const changeItemHandler = (item) => {
    dispatchCartAction({ type: 'CHANGE', item: item });
  };

  const decrementItemHandler = (id) => {
    dispatchCartAction({ type: 'DECREMENT', id: id });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  let { totalQuantity, totalPrice } = cartState.items.reduce(
    (total, cartItem) => {
      const { quantity, price } = cartItem;
      total.totalQuantity += quantity;
      total.totalPrice += quantity * price;
      return total;
    },
    {
      totalQuantity: 0,
      totalPrice: 0,
    }
  );

  const cartContext = {
    items: cartState.items,
    shipping: 6.99,
    totalQuantity,
    totalPrice: totalPrice,
    addItem: addItemHandler,
    decrementItem: decrementItemHandler,
    changeItem: changeItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
