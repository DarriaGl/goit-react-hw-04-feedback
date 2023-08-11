import React from 'react';
import propTypes from 'prop-types';
import { Box, Title } from './Section.styled.jsx';

export const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};
Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
