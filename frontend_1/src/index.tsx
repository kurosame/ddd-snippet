import React from 'react'
import { render } from 'react-dom'
import { SWRConfig } from 'swr'
import { worker } from '@/__mocks__/browser'
import { Employee } from './components/organisms/Employee'

if (process.env.NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' })
}

class RootComponent extends React.Component {
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error({ 'error-boundary-error': error, errorInfo })
  }

  public render() {
    return (
      <SWRConfig
        value={{
          onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
            if (error.status === 404) return
            if (retryCount >= 5) return
            setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000)
          }
        }}
      >
        <Employee />
      </SWRConfig>
    )
  }
}

render(<RootComponent />, document.getElementById('root'))
