import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import DateInput from './';
import data from './__mocks__/dateInputData';

it('renders', () => {
  mount(
    <MemoryRouter>
      <DateInput />
    </MemoryRouter>
  );
});

it('renders with content', () => {
  mount(
    <MemoryRouter>
      <DateInput {...data} />
    </MemoryRouter>
  );
});
