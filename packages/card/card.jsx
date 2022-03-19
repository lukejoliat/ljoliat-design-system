/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { color, space, typography, layout } from 'styled-system';

const StyledCard = styled('div')(typography, space, color, layout);

const Card = ({ variant = 'primary', children, ...props }) => {
  return (
    <StyledCard
      data-aid="ljoliat-card"
      sx={{ variant: `cards.${variant}` }}
      {...props}
    >
      {children}
    </StyledCard>
  );
};
export default Card;
