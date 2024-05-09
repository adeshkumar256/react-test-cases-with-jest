import { render, screen, waitFor } from '@testing-library/react'
import Counter from './Counter'
import user from '@testing-library/user-event'

describe('Counter', () => {
  test('render correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toBeInTheDocument()
    const buttonElement = screen.getByRole('button', { name: 'Increment' })
    expect(buttonElement).toBeInTheDocument()
  })

  test('check initial value of count to be 0 correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('0')
  })

  test('render a count of 1 after clicking increment button', async () => {
    user.setup()
    render(<Counter />)
    waitFor(async () => {
      const buttonElement = screen.getByRole('button', { name: 'Increment' })
      await user.click(buttonElement) // user.click is convenience apis other are like doubleCLick, tripleClick etc
      const countElement = screen.getByRole('heading', { level: 1 })
      expect(countElement).toHaveTextContent('1')
    })
  })
  test('render a count of 2 after clicking increment button', async () => {
    user.setup()
    render(<Counter />)
    waitFor(async () => {
      const buttonElement = screen.getByRole('button', { name: 'Increment' })
      await user.click(buttonElement)
      const countElement = screen.getByRole('heading', { level: 1 })
      expect(countElement).toHaveTextContent('1')
      await user.click(buttonElement)
      expect(countElement).toHaveTextContent('2')
    })
  })

  test('render a count of 10 after clicking set button', async () => {
    user.setup()
    render(<Counter />)
    waitFor(async () => {
      const amountInput = screen.getByRole('spinbutton')
      await user.type(amountInput, '10') // utility api clear(), selectOptions(), deSelectOptions(), upload()
      expect(amountInput).toHaveValue(10)
      const buttonElement = screen.getByRole('button', { name: 'Set' })
      await user.click(buttonElement)
      const headingElement = screen.getByRole('heading', { level: 2 })
      expect(headingElement).toHaveTextContent('Current amount: 10')
    })
  })
  // test("elements are focussed in right order", async () => {
  //   user.setup();
  //   render(<Counter />);
  //   const amountInput = screen.getByRole("spinbutton");
  //   const setButton = screen.getByRole("button", { name: "Set" });
  //   const incrementButton = screen.getByRole("button", { name: "Increment" });
  //   await user.tab()
  //   expect(incrementButton).toHaveFocus()
  //   await user.tab() //Convenience api
  //   expect(amountInput).toHaveFocus()
  //   await user.tab()
  //   expect(setButton).toHaveFocus()
  // });
})
