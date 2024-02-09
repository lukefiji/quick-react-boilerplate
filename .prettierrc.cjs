/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  tailwindConfig: './tailwind.config.js',
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  // @trivago/prettier-plugin-sort-imports
  // Sorts by:
  // 1. Third-party imports
  // 2. Aliased imports: `@/`
  // 3. Relative path imports
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
};

module.exports = config;
