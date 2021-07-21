import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Headings from './';
import data from './__mocks__/headingsData';

import info from './README.md';

storiesOf('Styleguide/Atoms/Headings', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <Headings />)
  .add('default', () => <Headings {...data} />);
