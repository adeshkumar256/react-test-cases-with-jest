import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'

describe('Testing function mocking', () => {
  test('counter render successfully', () => {
    render(<Counter count={0} />)
    const element = screen.getByText('Counter Two')
    expect(element).toBeInTheDocument()
  })
  test('handlers are called', async () => {
    userEvent.setup()
    // mocking functions
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <Counter
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />,
    )
    const incrementBtn = screen.getByRole('button', { name: 'Increment' })
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' })
    await userEvent.click(incrementBtn)
    await userEvent.click(decrementBtn)
    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
