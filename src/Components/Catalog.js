import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterContext from '../store/filter-context';
import Card from './Card';
import CategoryFilter from './Filter/CategoryFilter';

const Container = styled.div`
  margin: auto;
  max-width: 75rem;
  padding: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(8rem, 1fr));
  margin: 2.5rem auto 10rem 0;
  gap: 1rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(11rem, 1fr));
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(4, minmax(11rem, 1fr));
  }
`;

const FilterButton = styled.button`
  font-size: 1rem;
  height: 2.3rem;
  width: 8rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const Catalog = () => {
  const filterCtx = useContext(FilterContext);
  const [filterOn, setFilterOn] = useState(false);

  const filterHandler = () => {
    setFilterOn(!filterOn);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = filterOn ? 'hidden' : 'auto';
  }, [filterOn]);

  return (
    <React.Fragment>
      <Container>
        <FilterButton onClick={filterHandler}>Filter</FilterButton>
        {filterOn && <CategoryFilter filterHandler={filterHandler} />}

        <Grid>
          {filterCtx.items.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              description={product.description}
              difficulty={product.difficulty}
              lighting={product.lighting}
              position={product.position}
              price={product.price}
            />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Catalog;
