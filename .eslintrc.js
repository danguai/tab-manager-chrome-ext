module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'scripts/',
  ],
  globals: {
    chrome: true,
    browser: true,
    document: true,
    window: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
        '**/*.spec.js',
      ],
    }],
    'max-params': ['error', 3],
    'no-console': 'off',
    'no-extra-parens': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'unicorn/explicit-length-check': 'off',
  },
};
