module.exports = {
    presets: [

       [ 
        '@babel/preset-env',
        {
          bugfixes: true,
          loose: true,
          modules: false,
          targets: '> 0.25%, not dead, not ie 11',
          useBuiltIns: "entry",
        }
      ],
      ['@babel/react', { "runtime": "automatic" }],
      '@babel/preset-typescript',
      ['minify', { builtIns: false }]
    ],
    env: {
      test: {
        plugins: ['@babel/plugin-transform-runtime'],
      },
    },
  }