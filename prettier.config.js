module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['**/*.md', 'src/pages/**/*.{js,tsx}', 'data/**/*.{js,tsx}'],
      options: {
        // otherwise code blocks overflow on the docs website
        // The container is 751px
        printWidth: 85,
      },
    },
    {
      files: ['pages/blog/**/*.md'],
      options: {
        // otherwise code blocks overflow on the blog website
        // The container is 692px
        printWidth: 82,
      },
    },
  ],
};
