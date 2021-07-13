import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Checkbox from './';
import data from './__mocks__/checkboxData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <Checkbox />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <Checkbox {...data} />
    </MemoryRouter>
  );
});
