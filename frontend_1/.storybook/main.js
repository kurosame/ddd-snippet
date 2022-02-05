const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-a11y'],
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.resolve.alias['@'] = path.join(__dirname, '../src')
    return config
  }
}
