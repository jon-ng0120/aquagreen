import React from 'react';
import styled from 'styled-components';
import logo from '../assets/GitHub-Mark-32px.png';

const MainDiv = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.8rem 0;
`;

const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const InputDiv = styled.div`
  display: flex;
  border: 1px solid #ddd;
  height: 2rem;
  margin: 0.5rem 0;
  & input {
    border: none;
    padding: 0.5rem;
    width: 70%;
    outline: none;
  }

  & button {
    border: none;
    background-color: #189ab4;
    color: rgba(255, 255, 255, 0.9);
    width: 30%;
    cursor: pointer;
  }
`;

const CopyrightDiv = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 1.3rem;
    margin-left: 0.6rem;
  }
`;

const Footer = () => {
  return (
    <MainDiv>
      <EmailDiv>
        <p>Keep Up to Date with AquaGreen!</p>
        <InputDiv>
          <input placeholder="Enter your email" />
          <button>Sign Up</button>
        </InputDiv>
      </EmailDiv>
      <CopyrightDiv>
        <p>&copy; 2022 Jon-Ng0120</p>
        <a href="https://github.com/jon-ng0120" target="_blank">
          <img src={logo} />
        </a>
      </CopyrightDiv>
    </MainDiv>
  );
};

export default Footer;
