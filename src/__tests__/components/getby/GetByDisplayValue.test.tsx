import { render, screen } from '@testing-library/react'
import Application from '../../../components/application/Application'

// Here we used the getByDisplayValue to get the element
// it uses the value attribue on input, textarea etc

test('Get By Display Value', () => {
  render(<Application />)
  const element = screen.getByDisplayValue('Adesh Kumar')
  expect(element).toBeInTheDocument()
})
