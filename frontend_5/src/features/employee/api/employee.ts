'use server'

import { get } from '@/core/fetcher'
import { Employee } from '@/features/employee'

export const getEmployees = async () => await get<Employee[]>('/api/employee')
