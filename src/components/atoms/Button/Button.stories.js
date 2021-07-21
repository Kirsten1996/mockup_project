import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './';
import data from './__mocks__/buttonData';

import info from './README.md';

storiesOf('Styleguide/Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <Button />)
  .add('default', () => <Button {...data} />);
