import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import DateInput from './';
import data from './__mocks__/dateInputData';

import info from './README.md';

storiesOf('Styleguide/Atoms/DateInput', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <DateInput />)
  .add('default', () => <DateInput {...data} />);
