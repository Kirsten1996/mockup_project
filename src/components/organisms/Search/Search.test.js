import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Search from './';
import data from './__mocks__/searchData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <Search {...data} />
    </MemoryRouter>
  );
});
