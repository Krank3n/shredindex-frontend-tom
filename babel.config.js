module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    test: {
      plugins: [],
    },
    e2e: {
      plugins: [
        'istanbul',
      ],
    },
  },
};
