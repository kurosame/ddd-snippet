import React from 'react'
import { render } from 'react-dom'
import Employee from './components/organisms/Employee'

class RootComponent extends React.Component {
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error({ 'error-boundary-error': error, errorInfo })
  }

  public render() {
    return <Employee />
  }
}

render(<RootComponent />, document.getElementById('root'))
