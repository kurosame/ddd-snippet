// Use 'use client' because Server Actions cannot use React.use
'use client'

import { get } from '@/core/fetcher'
import { Employee } from '@/features/employee'

export const fetchEmployees = async () => await get<Employee[]>('/api/employee')
