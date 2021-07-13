import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Search from './';
import data from './__mocks__/searchData';

import info from './README.md';

storiesOf('Styleguide/Organisms/Search', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <Search />)
  .add('default', () => <Search {...data} />);
