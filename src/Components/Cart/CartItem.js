import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/cart-context';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 10rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const DeleteBtn = styled.span`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 1rem;
`;

const ItemName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-weight: 500;
  color: #004f23;
  font-size: 1rem;
`;

const QuantityDiv = styled.div`
  display: flex;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    font-size: 1.3rem;
    cursor: pointer;
    border: 1px solid #d4d2d2;
    background-color: white;

    &:hover {
      color: #6b6a6a;
    }
  }
  & select {
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
    border-bottom: 1px solid #aaa;
    margin: 0 0.5rem;
  }
`;

const ImageContainer = styled.div`
  & img {
    width: 9rem;
  }
`;

const CartItem = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const item = props.item;

  const createDropdown = () => {
    const arr = [];
    for (let i = 1; i <= 100; i++) {
      arr.push(i);
    }
    return arr;
  };

  const cartCtx = useContext(CartContext);

  const incrementItem = () => {
    setQuantity((prevState) => prevState + 1);
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const decrementItem = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
      cartCtx.decrementItem(item.id);
    } else {
      cartCtx.removeItem(item.id);
    }
  };

  const changeItemHandler = (e) => {
    setQuantity(parseInt(e.target.value));
    cartCtx.changeItem({ ...item, quantity: parseInt(e.target.value) });
  };

  const removeItem = () => {
    cartCtx.removeItem(item.id);
  };

  return (
    <ItemContainer>
      <DeleteBtn className="material-icons" onClick={removeItem}>
        clear
      </DeleteBtn>
      <ImageContainer>
        <img src={require(`../../assets/${item.images[0]}`)} />
      </ImageContainer>
      <InfoDiv>
        <div>
          <ItemName>{item.name}</ItemName>
          <Price>${item.price}</Price>
        </div>
        <QuantityDiv>
          <button onClick={decrementItem}>-</button>
          <select value={quantity} onChange={changeItemHandler}>
            {createDropdown().map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button onClick={incrementItem}>+</button>
        </QuantityDiv>
      </InfoDiv>
    </ItemContainer>
  );
};

export default CartItem;
