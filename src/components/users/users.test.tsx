import { render, screen } from '@testing-library/react'
import Users from './users'

describe('Users', () => {
  test('render correctly', () => {
    render(<Users />)
    const textEle = screen.getByText('Users')
    expect(textEle).toBeInTheDocument()
  })

  // test("render list of users", async () => {
  //   render(<Users/>)
  //   const users = await screen.findAllByRole('listitem')
  //   expect(users).toHaveLength(3)
  // })
})
