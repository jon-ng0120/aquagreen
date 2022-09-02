import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import FilterContext from '../../store/filter-context';
import { useSearchParams } from 'react-router-dom';

const AccordionDiv = styled.div`
  border-bottom: 1px solid #aaa;
`;

const FilterTitle = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & p {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const FilterList = styled.ul`
  list-style: none;
  width: 90%;
  margin: auto;

  & li {
    width: 100%;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const filterCtx = useContext(FilterContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const getURLParams = (category) => {
    const optionsParams = searchParams.get(category);

    const optionsArray = optionsParams !== '' ? optionsParams.split(',') : [];
    return optionsArray;
  };

  const checkOptionsFromURL = (category, option) => {
    const urlParams = getURLParams(category);
    return urlParams.includes(option);
  };

  const clickHandler = (e) => {
    const category = e.target.getAttribute('data-category');
    const option = e.target.getAttribute('data-option');

    filterCtx.addFilterOption({ category, option });
  };

  return (
    <AccordionDiv>
      <FilterTitle onClick={() => setIsActive(!isActive)}>
        <p>
          {props.title[0].toUpperCase() + props.title.substring(1)}
          {getURLParams(props.title).length > 0
            ? ` (${getURLParams(props.title).length})`
            : ''}
        </p>
        {isActive ? '-' : '+'}
      </FilterTitle>

      {isActive && (
        <FilterList>
          {props.options.map((option) => {
            return (
              <li key={`${props.title}${option}`}>
                <input
                  onChange={clickHandler}
                  id={option}
                  type="checkbox"
                  data-category={props.title}
                  data-option={option}
                  checked={checkOptionsFromURL(props.title, option)}
                />
                <label htmlFor={option}>
                  {option[0].toUpperCase() + option.substring(1)}
                </label>
              </li>
            );
          })}
        </FilterList>
      )}
    </AccordionDiv>
  );
};

export default Accordion;
