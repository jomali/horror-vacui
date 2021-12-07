import React from 'react';
import { StoryContext } from './StoryProvider';

export default () => {
  const story = React.useContext(StoryContext);
  return story;
};
