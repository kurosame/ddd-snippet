import type { NextPage } from 'next'
import { Suspense } from 'react'

import { Loading } from '@/components/atoms/Loading'
import { Employee } from '@/features/employee/components/Employee'

const Page: NextPage = () => (
  <Suspense fallback={<Loading />}>
    <Employee />
  </Suspense>
)

export default Page
