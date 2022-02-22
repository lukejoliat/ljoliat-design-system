/** @jsxImportSource theme-ui */
import React from 'react'

const StyledButton = styled('button')(typography, space, color);

const Button = ({ children, ...props }) => {
    return (
        <StyledButton data-aid="lukesbutton" sx={{ cursor: 'pointer', color: 'text', bg: 'primary', border: 'none', borderRadius: 4, fontWeight: 'bold', fontSize: 1, py: 1, px: 2, ...props }}>{children}</StyledButton>
    );
}

export default Button;