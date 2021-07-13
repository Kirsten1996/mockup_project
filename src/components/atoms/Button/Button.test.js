import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Button from './';
import data from './__mocks__/buttonData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <Button />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <Button {...data} />
    </MemoryRouter>
  );
});
