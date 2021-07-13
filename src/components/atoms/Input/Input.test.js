import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Input from './';
import data from './__mocks__/inputData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <Input />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <Input {...data} />
    </MemoryRouter>
  );
});
