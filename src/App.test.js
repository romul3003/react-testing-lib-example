import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { renderWithRouter } from './tests/helpers/renderWithRouter'

// describe('TEST APP', () => {
// test('Should render <App />', () => {
//   renderWithRouter(<App />)
//   const helloWorldElem = screen.getByText(/hello world/i)
//   const btn = screen.getByRole('button')
//   const input = screen.getByPlaceholderText(/input value/i)

//   expect(helloWorldElem).toBeInTheDocument()
//   expect(btn).toBeInTheDocument()
//   expect(input).toMatchSnapshot()
// })

// test('Should render text', async () => {
//   renderWithRouter(<App />)
//   // const helloWorldElem = screen.queryByText(/hello2/i)
//   // expect(helloWorldElem).toBeNull()

//   // screen.debug()
//   const helloWorldElem = await screen.findByText(/data/i)
//   expect(helloWorldElem).toBeInTheDocument()
//   expect(helloWorldElem).toHaveStyle({ color: 'red' })
//   // screen.debug()
// })

// test('Should click event', async () => {
//   renderWithRouter(<App />)

//   const btn = screen.getByTestId('toggle-button')
//   expect(screen.queryByTestId('toggle-elem')).toBeNull()

//   fireEvent.click(btn)
//   expect(screen.getByTestId('toggle-elem')).toBeInTheDocument()

//   fireEvent.click(btn)
//   expect(screen.queryByTestId('toggle-elem')).toBeNull()
// })

// test('Should input event', async () => {
//   renderWithRouter(<App />)

//   const input = screen.getByPlaceholderText(/input value/i)
//   expect(screen.queryByTestId('value-elem')).toContainHTML('')

//   // synthetic event
//   // fireEvent.input(input, {
//   //   target: {
//   //     value: '123123',
//   //   },
//   // })

//   // close to user, handle events of keyboard inputs etc...
//   userEvent.type(input, '123123')
//   expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
// })
// })

describe('TEST APP', () => {
  test('Should render <App />', () => {
    renderWithRouter(<App />)
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
})
