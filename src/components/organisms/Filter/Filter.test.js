import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Filter from './';
import data from './__mocks__/filterData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <Filter />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <Filter {...data} />
    </MemoryRouter>
  );
});
