import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  padding: 0 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;

  @media (min-width: 768px) {
    left: 20%;
    transform: translateX(-20%);
  }

  & button {
    margin-top: 2rem;
    background-color: white;
    padding: 0.8rem;
    width: 13rem;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #d4d2d2;
    }
  }
`;
const Message = styled.p`
  color: #efefef;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SecondMessage = styled.p`
  color: #efefef;
  font-size: 1.2rem;
  font-weight: 400;
`;

const HomeMessage = () => {
  return (
    <Div>
      <Message>For all your aquacaping needs</Message>
      <SecondMessage>
        Healthy, green, aquatic plants delivered right to you
      </SecondMessage>
      <Link to="/catalog?difficulty=&lighting=&position=">
        <button>SHOP NOW</button>
      </Link>
    </Div>
  );
};

export default HomeMessage;
