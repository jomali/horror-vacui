import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Option from 'components/Option';
import { useStory } from 'components/StoryProvider';

export const NodeContext = React.createContext();

export const Node = (props) => {
  const { children } = props;

  const story = useStory();

  const [selectedLinks, setSelectedLinks] = React.useState();

  const Content = (params) => {
    const responsiveMode = useMediaQuery((theme) =>
      theme.breakpoints.down('sm')
    );

    return responsiveMode ? <Box {...params} /> : <Paper {...params} />;
  };

  return (
    <NodeContext.Provider value={selectedLinks}>
      <Container
        maxWidth={'sm'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: '100%',
          padding: (theme) => theme.spacing(2),
        }}>
        <Content
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            padding: 2,
          }}>
          <Typography color="text.secondary" gutterBottom>
            Cambio de órbita
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
            }}>
            {children}
          </Box>
          {Boolean(story.actions) ? (
            <Stack
              spacing={1}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              {story.actions.map((element, index) => (
                <React.Fragment key={`option-${index}`}>
                  {element}
                </React.Fragment>
              ))}
            </Stack>
          ) : null}
        </Content>
      </Container>
    </NodeContext.Provider>
  );
};

export default Node;
