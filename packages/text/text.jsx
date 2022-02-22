/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { color, space, typography } from 'styled-system';

const StyledText = styled('span')(typography, space, color);

const Text = ({ variant = 'primary', children, ...props }) => {
  return (
    <StyledText
      data-aid="ljoliat-text"
      sx={{ variant: `text.${variant}` }}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
