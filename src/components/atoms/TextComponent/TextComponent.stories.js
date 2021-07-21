import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import TextComponent from './';
import data from './__mocks__/textComponentData';

import info from './README.md';

storiesOf('Styleguide/Atoms/TextComponent', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <TextComponent />)
  .add('default', () => <TextComponent {...data} />);
