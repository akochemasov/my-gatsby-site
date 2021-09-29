module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'My Gatsby Site'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        cwd: process.cwd(), // path to a directory that should be considered as the current working directory
        watch: true, // format/lint on save
        initialScan: true, // if true, will format/lint the whole project on Gatsby startup
        onChangeFullScanLint: false, // if true, on file save always perform full scan lint
        onChangeFullScanFormat: false, // if true, on file save always perform full scan format
        prettierLast: false, // if true, will run Prettier after ESLint
        ignorePatterns: [
          '**/node_modules/**/*',
          '**/.git/**/*',
          '**/dist/**/*',
          '.cache/**/*',
          'public/**/*'
        ],
        prettier: {
          // string or array of paths/files/globs to include related only to Prettier
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            'src/**/*.{js,jsx,ts,tsx}',
            'src/**/*.{css,scss,less}',
            'src/**/*.{json,json5}',
            'src/**/*.{graphql}',
            'src/**/*.{html}'
          ],
          // string or array of paths/files/globs to exclude related only to Prettier
          ignorePatterns: [],
          customOptions: {
            parser: 'flow',
            semi: true
          }
        },
        eslint: {
          patterns: 'src/**/*.{js,jsx,ts,tsx}', // string or array of paths/files/globs to include related only to ESLint
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
          // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
          customOptions: {
            // fix: true, // for work prettier
            cache: true
          }
        }
      }
    }
  ]
};
