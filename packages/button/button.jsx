/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { color, space, typography } from 'styled-system';

const StyledButton = styled('button')(typography, space, color);

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <StyledButton
      data-aid="ljoliat-button"
      sx={{
        variant: `buttons.${variant}`,
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
