import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Articles from './';
import data from './__mocks__/articlesData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <Articles />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <Articles {...data} />
    </MemoryRouter>
  );
});
