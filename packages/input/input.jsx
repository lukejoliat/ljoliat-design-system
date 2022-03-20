// /** @jsxImportSource theme-ui */
// import styled from '@emotion/styled';
// import { color, space, typography } from 'styled-system';

// const StyledInput = styled('input')(color, space, typography);

// const Input = ({ ...props }) => {
//   return (
//     <StyledInput
//       data-aid="ljoliat-input"
//       sx={{
//         border: '1px solid blue',
//         bg: 'muted',
//         color: 'text',
//         borderRadius: 4,
//         p: 2,
//       }}
//       {...props}
//     />
//   );
// };

// export default Input;
import React from 'react';
import Box from './packages';

import { get } from '@theme-ui/css';

/** @type {import('theme-ui').ThemeUIStyleObject} */
const autofillStyles = {
  boxShadow: 'inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)',
  fontSize: 'inherit',
  ':first-line': {
    fontSize: '1rem',
  },
};

/** @type {import('theme-ui').ThemeUIStyleObject} */
const defaultInputStyles = {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent',

  ':autofill, :autofill:hover, :autofill:focus': autofillStyles,
  ':-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus':
    autofillStyles,
};

export const Input = React.forwardRef(function Input(
  { sx, autofillBackgroundColor = 'background', ...rest },
  ref,
) {
  return (
    <Box
      ref={ref}
      as="input"
      variant="input"
      sx={{
        '--theme-ui-input-autofill-bg': (theme) =>
          get(theme.colors, autofillBackgroundColor, null),
        ...sx,
      }}
      {...rest}
      __themeKey="forms"
      __css={defaultInputStyles}
    />
  );
});
