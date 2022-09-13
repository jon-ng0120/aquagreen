import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import CartIcon from './Cart/CartIcon';

const Div = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  color: #404040;
`;

const Title = styled.div`
  /* letter-spacing: 0.4rem; */
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & ul {
    display: flex;
    list-style: none;
    align-items: center;
    & li {
      margin-left: 1rem;
      height: 100%;

      & a {
        padding: 0.3rem;
      }
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;

  &:visited {
    color: inherit;
  }
`;

const AquaSpan = styled.span`
  color: #189ab4;
`;
const GreenSpan = styled.span`
  color: #0e7835;
`;

const Header = () => {
  return (
    <Div>
      <Nav>
        <NavLink
          style={{
            fontSize: '2rem',
          }}
          to="/aquagreens"
        >
          <Title>
            <AquaSpan>A</AquaSpan>qua
            <GreenSpan>G</GreenSpan>reen
          </Title>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/aquagreen">Home</NavLink>
          </li>
          <li>
            <NavLink to="aquagreen/catalog?difficulty=&lighting=&position=">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="aquagreen/shopping-bag">
              <CartIcon />
            </NavLink>
          </li>
        </ul>
      </Nav>
    </Div>
  );
};

export default Header;
