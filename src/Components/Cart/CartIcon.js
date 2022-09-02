import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/cart-context';

const Div = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.3rem;
  cursor: pointer;
`;

const ItemCount = styled.span`
  font-size: 0.8rem;
  position: absolute;
  background-color: #189ab4;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
`;

const CartIcon = () => {
  const cartCtx = useContext(CartContext);
  return (
    <Div>
      <span className="material-icons" style={{ fontSize: '1.5rem' }}>
        shopping_bag
      </span>
      <ItemCount>{cartCtx.totalQuantity}</ItemCount>
    </Div>
  );
};

export default CartIcon;
