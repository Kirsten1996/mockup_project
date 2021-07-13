import React from 'react';
import ReactMarkdown from 'react-markdown';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MainArticle from './';
import data from './__mocks__/mainArticleData';

import info from './README.md';

storiesOf('Styleguide/Organisms/MainArticle', module)
  .addDecorator(withKnobs)
  .add('_notes', () => <ReactMarkdown source={info} escapeHtml={false} />)
  .add('<dynamic>', () => <MainArticle />)
  .add('default', () => <MainArticle {...data} />);
