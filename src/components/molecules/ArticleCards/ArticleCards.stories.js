import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import ArticleCards from './';
import data from './__mocks__/articleCardsData';

import info from './README.md';

storiesOf('Styleguide/Molecules/ArticleCards', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <ArticleCards />)
  .add('default', () => <ArticleCards {...data} />);
