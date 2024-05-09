import { render, screen } from '@testing-library/react'
import Application from '../../../components/application/Application'

// Here we used the getByAltText to get the element
// typically we use this to find element which support alt attribute like <input/>, <img/>, <area>

test('Get By Alt Text', () => {
  render(<Application />)
  const imgElement = screen.getByAltText('Logo')
  expect(imgElement).toBeInTheDocument()
})
