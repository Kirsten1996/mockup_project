import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Articles from './';
import data from './__mocks__/articlesData';

import info from './README.md';

storiesOf('Styleguide/Organisms/Articles', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <Articles />)
  .add('default', () => <Articles {...data} />);
