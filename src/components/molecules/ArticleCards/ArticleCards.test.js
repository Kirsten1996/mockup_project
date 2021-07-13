import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ArticleCards from './';
import data from './__mocks__/articleCardsData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <ArticleCards />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <ArticleCards {...data} />
    </MemoryRouter>
  );
});
