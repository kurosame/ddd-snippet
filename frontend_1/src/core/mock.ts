import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

export const createActionContextMock = (mockCache: unknown, mockMutate: unknown) => ({
  employeeRepository: new ApiEmployeeRepository(mockCache, mockMutate)
})
