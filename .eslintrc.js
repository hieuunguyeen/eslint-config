module.exports = {
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'simple-import-sort'],
  env: {
    es2020: true,
    es6: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          Function: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        vars: 'all',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'block-scoped-var': 'error',
    'class-methods-use-this': 0,
    'consistent-return': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'func-style': ['error', 'declaration'],
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'guard-for-in': 'error',
    'import/export': 'error',
    'import/extensions': 0,
    'import/first': ['error', 'absolute-first'],
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-default-export': 0,
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '/**/test/**/*.js',
          '/.prettierrc.js',
          '/bin/test',
          '/scripts/**/*.js',
          '/webpack.config.js',
        ],
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 0,
    'no-undef': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'simple-import-sort/imports': [
      1,
      {
        groups: [['^\\u0000'], ['^[^.]'], ['^\\.']],
      },
    ],
  },
};
