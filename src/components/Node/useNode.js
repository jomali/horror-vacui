import React from 'react';
import { NodeContext } from './Node';

export default () => {
  const node = React.useContext(NodeContext);
  return node;
};
