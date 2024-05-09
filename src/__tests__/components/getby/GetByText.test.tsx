import { render, screen } from '@testing-library/react'
import Application from '../../../components/application/Application'

// Here we used the getByText to get the element
// typically we use this to find element like div, paragraphs containing the desired text

test('Get By Text', () => {
  render(<Application />)
  const element = screen.getByText('Hello, Welcome to the React Testing!!!')
  expect(element).toBeInTheDocument()
})
