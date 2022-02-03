import React from 'react'
import { Employee } from '@/components/organisms/Employee'
import { DefaultLayout } from '@/components/templates/Default'

export const EmployeePage: React.VFC = () => (
  <DefaultLayout>
    <Employee />
  </DefaultLayout>
)
