import { act, renderHook } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('Test Custome hook', () => {
  test('test hook render successfully', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('test initial value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    })
    expect(result.current.count).toBe(10)
  })

  test('test increment value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    })
    act(() => result.current.increment()) // update the states in testing we have to use act which is a Utility function

    expect(result.current.count).toBe(11)
  })

  test('test decrement value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 4,
      },
    })
    act(() => result.current.decrement())

    expect(result.current.count).toBe(3)
  })
})
