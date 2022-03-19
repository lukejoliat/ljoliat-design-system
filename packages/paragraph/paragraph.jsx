/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { color, space, typography } from 'styled-system';
import { Paragraph as P } from 'theme-ui';

// const StyledText = styled('span')(typography, space, color);

const Text = ({ variant = 'primary', children, ...props }) => {
  return (
    <P data-aid="ljoliat-text" {...props}>
      {children}
    </P>
  );
};

export default Text;
