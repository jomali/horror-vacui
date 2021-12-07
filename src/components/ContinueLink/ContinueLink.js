import React from 'react';
import Link from '@mui/material/Link';

const ContinueLink = (props) => {
  const { children, label, onClick, persist = false, selected } = props;

  return (
    <>
      &nbsp;
      {Boolean(selected) && Boolean(persist) ? (
        <>
          {label}
          {children}
        </>
      ) : Boolean(selected) ? (
        { children }
      ) : (
        <Link onClick={() => onClick(label, true)} sx={{ cursor: 'pointer' }}>
          {label}
        </Link>
      )}
    </>
  );
};

export default ContinueLink;
