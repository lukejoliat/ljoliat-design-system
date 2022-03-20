import styled from '@emotion/styled';
import { css, get } from '@theme-ui/css';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import space from '@styled-system/space';
import color from '@styled-system/color';
import layout from '@styled-system/layout';

const boxSystemProps = [
  ...space.propNames,
  ...color.propNames,
  ...layout.propNames,
];

/**
 * @internal
 * @type {(prop: string) => boolean}
 */
export const __isBoxStyledSystemProp = (prop) => boxSystemProps.includes(prop);

const shouldForwardProp = createShouldForwardProp(boxSystemProps);

const sx = (props) => css(props.sx)(props.theme);
const base = (props) => css(props.__css)(props.theme);
const variant = ({ theme, variant, __themeKey = 'variants' }) =>
  css(get(theme, __themeKey + '.' + variant, get(theme, variant)));

export const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  space,
  color,
  layout,
  sx,
  (props) => props.css,
);

Box.displayName = 'Box';

export default Box;
