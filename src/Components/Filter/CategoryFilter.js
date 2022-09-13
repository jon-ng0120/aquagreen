import React from 'react';
import Accordion from './Accordion';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 2;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
`;

const FilterMenu = styled.div`
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 20rem;
  height: 100%;
  z-index: 100;
  padding-top: 1.5rem;

  & h2 {
    text-align: center;
    margin: 1rem 0;
  }
`;

const DeleteBtn = styled.span`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  cursor: pointer;
`;

const filterOptions = [
  {
    title: 'difficulty',
    options: ['beginner', 'intermediate', 'advanced'],
  },
  {
    title: 'lighting',
    options: ['low', 'medium', 'high'],
  },
  {
    title: 'position',
    options: ['foreground', 'midground', 'background'],
  },
];

const Background = (props) => {
  return <BackgroundDiv onClick={() => props.filterHandler()}></BackgroundDiv>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <Background filterHandler={props.filterHandler} />
      <FilterMenu>
        <h2>FILTER BY</h2>
        <DeleteBtn
          className="material-icons"
          onClick={() => props.filterHandler()}
        >
          clear
        </DeleteBtn>
        {filterOptions.map((filter) => (
          <Accordion
            key={filter.title}
            title={filter.title}
            options={filter.options}
          />
        ))}
      </FilterMenu>
    </React.Fragment>
  );
};

const CategoryFilter = (props) => {
  return (
    <div>
      <Modal filterHandler={props.filterHandler} />
    </div>
  );
};

export default CategoryFilter;
