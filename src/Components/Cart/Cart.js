import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import styled from 'styled-components';

const MainDiv = styled.div`
  padding: 0 1.2rem;
`;

const ItemsContainer = styled.div`
  margin-top: 2rem;
`;

const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: 1px solid #949494;
  padding: 0.5rem 0;
  line-height: 1.6;
  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const PriceDiv = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  border-top: 1px solid #949494;
  border-bottom: 1px solid #949494;
  margin: 0.8rem 0;
  padding: 0.6rem 0;
`;

const Tax = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #525252;
`;

const CheckoutBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  height: 3rem;
  background-color: #3e85ab;
  color: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #287aa6;
  }
`;

const ContinueShopping = styled.button`
  width: 100%;
  font-size: 1rem;
  height: 3rem;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  background-color: #0e7835;
  color: #eee;
  cursor: pointer;
  &:hover {
    background-color: #116530;
  }
`;

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const cartTotal = cartCtx.totalPrice + cartCtx.shipping;

  return (
    <MainDiv>
      <h1>My Bag</h1>
      <ItemsContainer>
        {cartItems.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </ItemsContainer>
      <TotalDiv>
        <div>
          <p>Bag Total</p>
          <p>$ {cartCtx.totalPrice}</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>$ {cartCtx.shipping}</p>
        </div>
        <div>
          <Tax>Tax will be calculated at end of checkout</Tax>
        </div>
        <PriceDiv>
          <p>Total</p>
          <p>$ {cartTotal.toFixed(2)}</p>
        </PriceDiv>
      </TotalDiv>
      <CheckoutBtn>CHECKOUT</CheckoutBtn>

      <Link to="/catalog?difficulty=&lighting=&position=">
        <ContinueShopping>CONTINUE SHOPPING</ContinueShopping>
      </Link>
    </MainDiv>
  );
};

export default Cart;
