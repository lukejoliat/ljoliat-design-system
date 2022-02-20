/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { text } from 'body-parser';
import React from 'react'
import { color, space, typography } from 'styled-system';

const StyledText = styled('span')(typography, space, color);

const Text = ({ children, ...props }) => {
    return (
        <StyledText sx={{ color: text, fontSize: 'inherit' }} {...props}>{children}</StyledText>
    );
}

export default Text;