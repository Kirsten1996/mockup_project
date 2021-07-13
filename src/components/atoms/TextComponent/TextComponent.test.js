import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import TextComponent from './';
import data from './__mocks__/textComponentData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <TextComponent />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <TextComponent {...data} />
    </MemoryRouter>
  );
});
