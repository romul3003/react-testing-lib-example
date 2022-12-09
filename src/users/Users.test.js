/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { MemoryRouter } from 'react-router-dom'

import { renderWithRouter } from '../tests/helpers/renderWithRouter'

import Users from './Users'

jest.mock('axios')

describe('TEST APP', () => {
  let response

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should render Users', async () => {
    axios.get.mockReturnValue(response)
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>,
    )

    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
  })

  test('Should redirect to details page', async () => {
    axios.get.mockReturnValue(response)
    renderWithRouter(<Users />)

    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)

    userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
    // screen.debug()
  })
})
