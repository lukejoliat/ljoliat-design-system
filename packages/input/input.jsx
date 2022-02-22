/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { color, space, typography } from 'styled-system';

const StyledInput = styled('input')(color, space, typography);

const Input = ({ ...props }) => {
  return (
    <StyledInput
      data-aid="ljoliat-input"
      sx={{
        border: '1px solid blue',
        bg: 'muted',
        color: 'text',
        borderRadius: 4,
        p: 2,
      }}
      {...props}
    />
  );
};

export default Input;
