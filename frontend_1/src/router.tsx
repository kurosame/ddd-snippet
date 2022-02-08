import { Route, Routes } from 'react-router-dom'
import { EmployeePage } from '@/components/pages/Employee'

export const Router: React.VFC = () => (
  <Routes>
    <Route path="/" element={<EmployeePage />} />
    <Route path="employee" element={<EmployeePage />} />
  </Routes>
)
