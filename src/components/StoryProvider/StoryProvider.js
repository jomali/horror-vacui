import React from 'react';

export const StoryContext = React.createContext();

export const StoryProvider = (props) => {
  const { children } = props;

  const [actions, setActions] = React.useState();

  return (
    <StoryContext.Provider
      value={{
        actions,
        addActions: (values) => setActions(values),
      }}>
      {children}
    </StoryContext.Provider>
  );
};
