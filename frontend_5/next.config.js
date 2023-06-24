/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    API_URL: 'http://localhost:3000'
  },
  experimental: {
    serverActions: true
  }
}
