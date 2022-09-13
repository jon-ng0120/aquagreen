import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import CartIcon from './Cart/CartIcon';

const Div = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: ${(props) => (props.homePage ? '#efefef' : 'black')};
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
  const location = useLocation();

  return (
    <Div
      homePage={
        location.pathname == '/' || location.pathname == '/aquagreen'
          ? true
          : false
      }
    >
      <Nav>
        <NavLink
          style={{
            fontSize: '2rem',
          }}
          to="/"
        >
          <AquaSpan>A</AquaSpan>qua
          <GreenSpan>G</GreenSpan>reen
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
