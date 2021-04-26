import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ListElement key={shoe.slug}><ShoeCard {...shoe} /></ListElement>
      ))}
    </Wrapper>
  );
};

const ListElement = styled.li`
  flex: 1 0 250px;
`;

const Wrapper = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export default ShoeGrid;
