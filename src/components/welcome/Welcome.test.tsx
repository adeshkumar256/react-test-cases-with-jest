import { render, screen } from '@testing-library/react'
import Welcome from '../../../src/components/welcome/Welcome'

//describe is used to group test cases
describe('Welcome', () => {
  test('component renders successfully', () => {
    render(<Welcome />)
    const welcomeText = screen.getByText(/Welcome to the/i)
    expect(welcomeText).toBeInTheDocument()
  })

  test('App name Facebook', () => {
    render(<Welcome appName="facebook" />)
    const welcomeText = screen.getByText(/Welcome to the Facebook/i)
    expect(welcomeText).toBeInTheDocument()
  })
  // use test.only to run particular test
  //use.test.skip to skip tests
  test('component renders successfully', () => {
    render(<Welcome appName="instagram" />)
    const welcomeText = screen.getByText(/Welcome to the instagram/i)
    expect(welcomeText).toBeInTheDocument()
  })

  describe('testing twitter nested', () => {
    test('component renders successfully', () => {
      render(<Welcome appName="twitter" />)
      const welcomeText = screen.getByText(/Welcome to the twitter/i)
      expect(welcomeText).toBeInTheDocument()
    })
  })
})

describe('testing tiktok nested', () => {
  test('component renders successfully', () => {
    render(<Welcome appName="tiktok" />)
    const welcomeText = screen.getByText(/Welcome to the tiktok/i)
    expect(welcomeText).toBeInTheDocument()
  })
})
