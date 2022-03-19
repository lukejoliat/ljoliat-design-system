const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#ffffff',
    background: '#23272f',
    primary: '#087ea4',
    secondary: '#149eca',
    accent: 'rgb(87 95 183)',
    muted: '#343a46',
  },
  cards: {
    primary: {
      bg: 'muted',
      border: 'none',
      borderRadius: 4,
      minWidth: 0,
      p: 2,
    },
  },
  text: {
    primary: {
      color: 'text',
      fontSize: 'inherit',
    },
    heading: {
      fontFamily: 'monospace',
      fontWeight: 'heading',
      lineHeight: '2',
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      color: 'text',
      border: 'none',
      borderRadius: 4,
      fontWeight: 'bold',
      fontSize: 1,
      py: 1,
      px: 2,
      bg: 'primary',
    },
    secondary: {
      cursor: 'pointer',
      color: 'text',
      border: 'none',
      borderRadius: 4,
      fontWeight: 'bold',
      fontSize: 1,
      py: 1,
      px: 2,
      bg: 'secondary',
    },
    tertiary: {
      cursor: 'pointer',
      color: 'text',
      border: 'none',
      borderRadius: 4,
      fontWeight: 'bold',
      fontSize: 1,
      py: 1,
      px: 2,
      bg: 'accent',
    },
  },
  forms: {
    select: {
      fontFamily: 'roboto',
      bg: 'red',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};

export { theme };
