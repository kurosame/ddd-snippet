const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-a11y'],
  staticDirs: ['../public'],
  core: {
    builder: {
      name: 'webpack5',
      options: { lazyCompilation: true, fsCache: true }
    }
  },
  webpackFinal: async p => {
    p.resolve.alias['@'] = path.join(__dirname, '../src')
    return p
  },
  babel: async p => ({
    ...p,
    presets: [...p.presets, '@emotion/babel-preset-css-prop'],
    plugins: ['react-require']
  })
}
