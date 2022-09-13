import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import styled from 'styled-components';

const MainDiv = styled.div`
  padding: 0 1.2rem;
  max-width: 75rem;
  @media only screen and (min-width: 820px) {
    margin: auto;
    display: ${(props) => (props.emptyCart ? '#flex' : 'grid')};
    grid-template-areas:
      'cartTitle cartTitle'
      'itemsDiv totalDiv'
      'itemsDiv .'
      'itemsDiv .';
    grid-gap: 2rem;
    grid-template-columns: 1fr 0.75fr;
  }
`;

const CartTitle = styled.h2`
  grid-area: cartTitle;
  font-size: 1.7rem;
`;

const ItemsContainer = styled.div`
  margin-top: 2rem;
  grid-area: itemsDiv;
`;

const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
  border-top: 1px solid #949494;
  padding: 0.5rem 0;
  line-height: 1.6;
  grid-area: totalDiv;
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

const EmptyBagDiv = styled.div`
  text-align: center;
`;

const EmptyBagMessage = styled.h2`
  margin-top: 15rem;
  margin-bottom: 1rem;
`;

const ContinueShopping = styled.button`
  width: 100%;
  max-width: 992px;
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

  const ContinueShoppingBtn = (
    <Link to="/aquagreen/catalog?difficulty=&lighting=&position=">
      <ContinueShopping>CONTINUE SHOPPING</ContinueShopping>
    </Link>
  );

  return (
    <MainDiv emptyCart={cartItems.length < 1 ? true : false}>
      <CartTitle>My Bag</CartTitle>
      {cartItems.length >= 1 ? (
        <React.Fragment>
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
              <p>$ {cartCtx.totalPrice.toFixed(2)}</p>
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
            <CheckoutBtn>CHECKOUT</CheckoutBtn>
            {ContinueShoppingBtn}
          </TotalDiv>
        </React.Fragment>
      ) : (
        <EmptyBagDiv>
          <EmptyBagMessage>Your Shopping Bag is Empty</EmptyBagMessage>
          {ContinueShoppingBtn}
        </EmptyBagDiv>
      )}
    </MainDiv>
  );
};

export default Cart;
