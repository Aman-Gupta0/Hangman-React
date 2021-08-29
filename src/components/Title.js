import React from 'react';

const HeadingStyle = {
  display: 'block',
  verticalAlign: 'middle',
  textAlign: 'center',
  fontSize: '42px',
  fontWeight: 700,
  margin: 30
};

const Title = ({ heading }) => {
  return <div style={HeadingStyle}>{heading}</div>;
};

export default Title;
