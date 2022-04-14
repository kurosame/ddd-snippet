import { General } from '@/core/General'

describe('isEmpty', () => {
  test('is empty', () => {
    expect(General.isEmpty(null)).toBeTruthy()
    expect(General.isEmpty(undefined)).toBeTruthy()
    expect(General.isEmpty('')).toBeTruthy()
  })

  test('is not empty', () => {
    expect(General.isEmpty('aaa')).toBeFalsy()
    expect(General.isEmpty(0)).toBeFalsy()
  })
})

describe('isNotEmpty', () => {
  test('is empty', () => {
    expect(General.isNotEmpty(null)).toBeFalsy()
    expect(General.isNotEmpty(undefined)).toBeFalsy()
    expect(General.isNotEmpty('')).toBeFalsy()
  })

  test('is not empty', () => {
    expect(General.isNotEmpty('aaa')).toBeTruthy()
    expect(General.isNotEmpty(0)).toBeTruthy()
  })
})
