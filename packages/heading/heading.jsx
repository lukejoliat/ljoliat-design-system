/** @jsxImportSource theme-ui */
import React from 'react';
import styled from '@emotion/styled';
import { Box, Heading as H } from 'theme-ui';
import { typography, space, color } from 'styled-system';
// export default Heading;
// const Heading = ({ variant = 'primary', children, ...props }) => (
//   <H
//   // data-aid="ljoliat-heading"
//   // sx={{ variant: `text.heading.${variant}` }}
//   // {...props}
//   >
//     {children}
//   </H>
// );
// export default Heading;

const StyledHeading = styled('h1')(typography, space, color);

const Heading = ({ variant = 'primarysa', children, ...props }) => {
  return (
    <StyledHeading
      data-aid="ljoliat-text"
      sx={{ variant: `text.heading.${variant}` }}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
