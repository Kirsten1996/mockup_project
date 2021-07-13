import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import FocalImage from './';
import data from './__mocks__/focalImageData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <FocalImage />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <FocalImage {...data} />
    </MemoryRouter>
  );
});
