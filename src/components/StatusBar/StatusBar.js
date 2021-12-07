import React from 'react';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.physique.main,
  },
}));

const StatusBar = (props) => {
  const { value = 70 } = props;

  return (
    <Tooltip title={'7/10'}>
      <BorderLinearProgress value={value} variant="determinate" />
    </Tooltip>
  );
};

export default StatusBar;
