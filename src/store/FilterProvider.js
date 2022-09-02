import { useEffect, useState, useReducer } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import FilterContext from './filter-context';
import products from '../Components/products';

const FilterProvider = (props) => {
  const [filteredItems, setFilterItems] = useState(products);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentLocation = useLocation().search;

  const addFilterHandler = ({ category, option }) => {
    const difficultyParam = searchParams.get('difficulty');
    const lightingParam = searchParams.get('lighting');
    const positionParam = searchParams.get('position');

    const updatedParams = {
      difficulty: difficultyParam,
      lighting: lightingParam,
      position: positionParam,
    };

    if (updatedParams[category] === '') {
      updatedParams[category] = option;
    } else {
      if (updatedParams[category].split(',').includes(option)) {
        const splitValues = updatedParams[category].split(',');
        const newValues = splitValues.filter((item) => item !== option);
        updatedParams[category] = newValues.join(',');
      } else {
        const newValue = updatedParams[category].concat(',', option);
        updatedParams[category] = newValue;
      }
    }

    const updatedUrl = `difficulty=${updatedParams.difficulty}&lighting=${updatedParams.lighting}&position=${updatedParams.position}`;

    setSearchParams(updatedUrl);

    let filteredItemsList = products;
    for (const category in updatedParams) {
      if (updatedParams[category] !== '') {
        const selectedFilterOptions = updatedParams[category].split(',');
        const newList = filteredItemsList.filter((item) => {
          return selectedFilterOptions.includes(item[category]);
        });
        filteredItemsList = newList;
      }
    }
    setFilterItems(filteredItemsList);
  };

  const filterContext = {
    addFilterOption: addFilterHandler,
    // removeFilterOption: removeFilterHandler,
    items:
      currentLocation === '?difficulty=&lighting=&position='
        ? products
        : filteredItems,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
