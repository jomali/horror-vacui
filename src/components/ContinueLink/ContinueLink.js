import React from 'react';
import Link from '@mui/material/Link';

const ContinueLink = (props) => {
  const { children, label } = props;

  const [selected, setSelected] = React.useState();

  return Boolean(children) && Boolean(selected) ? (
    children
  ) : !Boolean(children) && Boolean(selected) ? (
    label
  ) : (
    <Link
      onClick={() => setSelected(true)}
      sx={{
        cursor: 'pointer',
      }}
    >
      {label}
    </Link>
  );
};

export default ContinueLink;
