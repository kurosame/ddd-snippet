import type React from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'

import { worker } from '@/__mocks__/browser'
import { ActionContext, useActionContext } from '@/components/hooks/di'
import { Router } from '@/router'

if (import.meta.env.MODE === 'development') {
  worker()
    .start({ onUnhandledRequest: 'bypass' })
    .catch(e => {
      throw e
    })
}

const FallbackError = () => <div />

const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
  console.error({ 'error-boundary-error': error, errorInfo })
}

const RootComponent: React.FC = () => (
  <ErrorBoundary FallbackComponent={FallbackError} onError={handleError}>
    <ActionContext.Provider value={useActionContext()}>
      <BrowserRouter>
        <RecoilRoot>
          <SWRConfig
            value={{
              // TODO: Official `error` is `any`, so I define it myself
              onErrorRetry: (error: Error & { status: number }, _key, _config, revalidate, { retryCount }) => {
                if (error.status === 404) return
                if (retryCount >= 5) return
                setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000)
              }
            }}
          >
            <Router />
          </SWRConfig>
        </RecoilRoot>
      </BrowserRouter>
    </ActionContext.Provider>
  </ErrorBoundary>
)

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(<RootComponent />)
}
