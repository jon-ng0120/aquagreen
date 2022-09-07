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
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
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

const Label = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  font-weight: 500;
  cursor: pointer;

  & input {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    /* color: currentColor; */
    width: 1.15em;
    height: 1.15em;
    border: 0.1em solid #8f8f8f;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    cursor: pointer;

    &::before {
      content: '';
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      /* transition: 120ms transform ease-in-out; */
      /* box-shadow: inset 1em 1em var(--form-control-color); */
      background-color: #3e85ab;
      /* transform-origin: bottom left; */
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
      transform: scale(1);
    }
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
                <Label htmlFor={option}>
                  <input
                    onChange={clickHandler}
                    id={option}
                    type="checkbox"
                    data-category={props.title}
                    data-option={option}
                    checked={checkOptionsFromURL(props.title, option)}
                  />
                  {option[0].toUpperCase() + option.substring(1)}
                </Label>
              </li>
            );
          })}
        </FilterList>
      )}
    </AccordionDiv>
  );
};

export default Accordion;
