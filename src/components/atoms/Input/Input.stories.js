import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from './';
import data from './__mocks__/inputData';

import info from './README.md';

storiesOf('Styleguide/Atoms/Input', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <Input />)
  .add('default', () => <Input {...data} />);
