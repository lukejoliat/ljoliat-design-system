import React from 'react';
import { Box } from 'theme-ui';

export const Message = React.forwardRef(function Message(props, ref) {
  return (
    <Box
      ref={ref}
      variant="primary"
      __css={{
        p: 2,
        bg: 'muted',
        borderRadius: 2,
        borderLeftWidth: 4,
        borderLeftStyle: 'solid',
        borderLeftColor: 'primary',
      }}
      {...props}
    />
  );
});
