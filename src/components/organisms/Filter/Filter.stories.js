import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Filter from './';
import data from './__mocks__/filterData';

import info from './README.md';

storiesOf('Styleguide/Organisms/Filter', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <Filter />)
  .add('default', () => <Filter {...data} />);
