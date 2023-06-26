'use server'

import { put } from '@/core/fetcher'

export const updateEmployee = async () =>
  await put<void>('/api/employee', { data: `Update! ${new Date().getMinutes()}` })
