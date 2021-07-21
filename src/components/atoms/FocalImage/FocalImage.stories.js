import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import FocalImage from './';
import data from './__mocks__/focalImageData';

import info from './README.md';

storiesOf('Styleguide/Atoms/FocalImage', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <FocalImage />)
  .add('default', () => <FocalImage {...data} />);
