import { render, screen } from '@testing-library/react'
import Application from '../../../components/application/Application'

// here we have used getByRole function for getting the element by its role
// like input have role:textbox select has role:combobox etc
//

describe('Application', () => {
  it('should contain input element', () => {
    render(<Application />)
    const inputElement = screen.getByRole('textbox', { name: 'Name' })
    expect(inputElement).toBeInTheDocument()
  })

  it('should contain input element', () => {
    render(<Application />)
    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    // here in {name: "Bio"} Bio is the name given to the label for the textarea <label htmlFor='bio'>Bio</label>
    expect(bioElement).toBeInTheDocument()
  })

  it('should contain select element', () => {
    render(<Application />)
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()
  })

  it('should contain checkbox element', () => {
    render(<Application />)
    const checkboxElement = screen.getByRole('checkbox')
    expect(checkboxElement).toBeInTheDocument()
  })

  it('should contain button', () => {
    render(<Application />)
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
  })

  it('should contain heading', () => {
    render(<Application />)
    // here we are using levels to get the headigns with level from 1..6
    const heading1 = screen.getByRole('heading', { level: 1 })
    expect(heading1).toBeInTheDocument()

    const heading2 = screen.getByRole('heading', { level: 2 })
    expect(heading2).toBeInTheDocument()

    // we can also use {name: "heading1"} where headng1 will be the text inside heading
    const headingWithText = screen.getByRole('heading', { name: 'heading 1' })
    expect(headingWithText).toBeInTheDocument()
  })
  // Along with these we can have name, level, hidden, checked, selected, pressed in the options for getByRole
})
