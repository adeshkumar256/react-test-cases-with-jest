import { render, screen } from '@testing-library/react'
import Application from '../../../components/application/Application'

// Here we used the getByPlaceholderText to get the element

test('Get By Placeholder Text', () => {
  render(<Application />)
  const element = screen.getByPlaceholderText('Full Name')
  expect(element).toBeInTheDocument()
})
