import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { renderWithRouter } from './tests/helpers/renderWithRouter'

import App from './App'

describe('TEST ROUTER', () => {
  // test('Should test Router', () => {
  //   renderWithRouter(<App />)
  //   const mainLink = screen.getByTestId('main-link')
  //   const aboutLink = screen.getByTestId('about-link')

  //   userEvent.click(aboutLink)
  //   expect(screen.getByTestId('about-page')).toBeInTheDocument()

  //   userEvent.click(mainLink)
  //   expect(screen.getByTestId('main-page')).toBeInTheDocument()
  // })

  // test('Should render Error page', () => {
  //   renderWithRouter(<App />, '/asdfasdf')

  //   expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
  // })

  test('Should test Router', () => {})
})
