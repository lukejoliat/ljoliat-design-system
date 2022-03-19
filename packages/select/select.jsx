/** @jsxImportSource theme-ui */
import React from 'react';
import styled from '@emotion/styled';
import { Box, Heading as H, Select } from 'theme-ui';
import { typography, space, color } from 'styled-system';

// const StyledHeading = styled('h1')(typography, space, color);

export default ({ variant = 'primarysa', children, ...props }) => {
  return (
    <Select
      data-aid="ljoliat-select"
      // sx={{
      //   variant: `forms.heading.${variant}`
      //   bg: 'primary',
      //   cursor: 'pointer',
      // }}
      {...props}
      variant="primary"
    >
      {children}
    </Select>
  );
};
