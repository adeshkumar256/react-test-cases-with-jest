import { render, screen } from '@testing-library/react'
import Application from '../../../components/application/Application'

// Here we used the getByText to get the element
// we use this to get element having matching title attributr value

test('Get By Label Test', () => {
  render(<Application />)
  const element = screen.getByTitle('My Login Page')
  expect(element).toBeInTheDocument()
})
