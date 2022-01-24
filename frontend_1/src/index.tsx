import React from 'react'
import { render } from 'react-dom'
import { Employee } from './components/organisms/Employee'

if (process.env.NODE_ENV === 'development') {
  import('@/__mocks__/browser').then(r => r.worker.start()).catch(e => console.error({ 'msw-error': e }))
}

class RootComponent extends React.Component {
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error({ 'error-boundary-error': error, errorInfo })
  }

  public render() {
    return <Employee />
  }
}

render(<RootComponent />, document.getElementById('root'))
