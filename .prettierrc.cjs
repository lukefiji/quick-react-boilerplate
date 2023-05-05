/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always',
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  tailwindConfig: './tailwind.config.js',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
};

module.exports = config;
