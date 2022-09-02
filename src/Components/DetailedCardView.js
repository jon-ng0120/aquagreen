import React, { useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from '../store/cart-context';

const MainDiv = styled.div`
  padding: 0 1.2rem;
`;

const NameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const ReviewsDiv = styled.div`
  display: flex;
  justify-content: end;
  min-width: 40%;

  & div {
    display: flex;
  }
  & p {
    margin-top: -0.1rem;
    margin-left: 0.2rem;
    text-decoration: underline;
    color: #5c5c5c;
    cursor: pointer;
  }
`;

const Star = styled.span`
  color: #000;
  font-size: 1.2rem;
  &:last-child {
    color: linear-gradient(to right, red, yellow);
  }
`;

const ImageDiv = styled.div`
  text-align: center;
  margin: 1rem 0;
  & img {
    max-width: 28rem;
    max-height: 28rem;
    width: 100%;
  }
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #00781c;
  font-weight: 600;
`;

const AddCartBtn = styled.button`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem;
  border: none;
  letter-spacing: 3px;
  background-color: #0e7835;
  color: #eee;
  cursor: pointer;
  &:hover {
    background-color: #116530;
  }
`;

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  margin: 1rem 0;
  & p {
    margin-top: -0.2rem;
  }
  & select {
    height: 100%;
    text-align: center;
    width: 4rem;
    box-sizing: border-box;
    font-size: 1rem;
    border: 1px solid #ddd;
    margin-left: 1rem;
  }
`;

const DescriptionDiv = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  & h3 {
    margin-bottom: 0.8rem;
  }
`;

const OverviewDiv = styled.div`
  margin: 1rem 0 0 0;
  & div {
    display: flex;
    margin-bottom: 0.3rem;

    & p:first-child {
      font-weight: 500;
      min-width: 10rem;
    }
  }
`;

const DetailedCardView = () => {
  const location = useLocation();
  const props = location.state;
  const productImages = props.images;
  const cartCtx = useContext(CartContext);
  const quantityRef = useRef();

  const addCartHandler = (e) => {
    e.preventDefault();
    const enteredQuantity = quantityRef.current.value;
    const item = {
      id: props.id,
      name: props.name,
      images: productImages,
      quantity: +enteredQuantity,
      price: props.price,
    };

    cartCtx.addItem(item);
  };

  return (
    <MainDiv>
      <NameDiv>
        <h2>{props.name}</h2>
        <ReviewsDiv>
          <div>
            <Star className="material-icons">star</Star>
            <Star className="material-icons">star</Star>
            <Star className="material-icons">star</Star>
            <Star className="material-icons">star</Star>
            <Star className="material-icons">star_half</Star>
          </div>
          <p>78</p>
        </ReviewsDiv>
      </NameDiv>

      <ImageDiv>
        <img src={require(`../assets/${productImages[0]}`)} />
      </ImageDiv>
      <Price>${props.price}</Price>
      <QuantityDiv>
        <p>Quantity:</p>
        <select ref={quantityRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </QuantityDiv>
      <div>
        <AddCartBtn onClick={addCartHandler}>ADD TO CART</AddCartBtn>
      </div>

      <DescriptionDiv>
        <h3>Description</h3>
        <p>{props.description}</p>
        <OverviewDiv>
          <h3>Overview</h3>
          <div>
            <p>Difficulty:</p>
            <p>{`${props.difficulty[0].toUpperCase()}${props.difficulty.slice(
              1
            )}`}</p>
          </div>
          <div>
            <p>Lighting:</p>
            <p>{`${props.lighting[0].toUpperCase()}${props.lighting.slice(
              1
            )}`}</p>
          </div>
          <div>
            <p>Position:</p>
            <p>{`${props.position[0].toUpperCase()}${props.position.slice(
              1
            )}`}</p>
          </div>
        </OverviewDiv>
      </DescriptionDiv>
    </MainDiv>
  );
};

export default DetailedCardView;
