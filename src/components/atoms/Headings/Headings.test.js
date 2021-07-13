import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Headings from './';
import data from './__mocks__/headingsData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <Headings />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <Headings {...data} />
    </MemoryRouter>
  );
});
