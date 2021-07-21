import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Checkbox from './';
import data from './__mocks__/checkboxData';

import info from './README.md';

storiesOf('Styleguide/Atoms/Checkbox', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <Checkbox />)
  .add('default', () => <Checkbox {...data} />);
