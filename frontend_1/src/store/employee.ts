import { atom } from 'recoil'

export const employeeState = atom({
  key: 'employeeState',
  default: { employeeId: 'default', employeeName: 'デフォルト' }
})
