/** @jsxImportSource theme-ui */
import React from 'react'

const Input = ({ style, ...props }) => {
    return (
        <input sx={{ border: '1px solid blue', ...style }} {...props} />
    );
}

export default Input;