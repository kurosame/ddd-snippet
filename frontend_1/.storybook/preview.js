if (process.env.NODE_ENV !== 'test') {
  import('@/__mocks__/browser').then(r => r.worker.start())
}
