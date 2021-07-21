import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import MainArticle from './';
import data from './__mocks__/mainArticleData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <MainArticle />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <MainArticle {...data} />
    </MemoryRouter>
  );
});
