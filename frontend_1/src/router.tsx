import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loading } from '@/components/atoms/Loading'

const EmployeePage = React.lazy(() =>
  import('@/components/pages/Employee').then(m => ({
    default: m.EmployeePage
  }))
)

export const Router: React.VFC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          <EmployeePage />
        </Suspense>
      }
    />
    <Route
      path="employee"
      element={
        <Suspense fallback={<Loading />}>
          <EmployeePage />
        </Suspense>
      }
    />
  </Routes>
)
