module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.css', '.styl'],
      },
    },
  },
  globals: {
    window: true,
    document: true,
    __dirname: true,
    __DEV__: true,
    CONFIG: true,
    process: true,
    jest: true,
    describe: true,
    test: true,
    it: true,
    expect: true,
    beforeEach: true,
    fetch: true,
    alert: true,
  },
  rules: {
    'no-plusplus': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        styl: 'never',
        css: 'never',
      },
    ],
  },
};
