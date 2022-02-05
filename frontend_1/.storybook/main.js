const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.resolve.alias['@'] = path.join(__dirname, '../src')
    return config
  }
}
