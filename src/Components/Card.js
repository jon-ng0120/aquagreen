import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 14rem;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: none;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (min-width: 600px) {
    height: 16rem;
  }

  @media only screen and (min-width: 992px) {
    height: 18rem;
  }
`;

const ImageDiv = styled.div`
  height: 70%;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.p`
  font-weight: 600;
  margin-top: 0.7rem;
  margin-bottom: 0.5rem;
`;

const Card = (props) => {
  return (
    <Div
      to={`${props.id}`}
      state={{
        id: props.id,
        name: props.name,
        images: props.images,
        description: props.description,
        price: props.price,
        difficulty: props.difficulty,
        lighting: props.lighting,
        position: props.position,
      }}
    >
      <ImageDiv>
        <PreviewImage src={require(`../assets/${props.images[0]}`)} />
      </ImageDiv>
      <div>
        <Name>{props.name}</Name>
        <p>${props.price}</p>
      </div>
    </Div>
  );
};

export default Card;
