/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'
import { renderTestApp } from '../../tests/helpers/renderTestApp'
import Counter from './Counter'

describe('Counter test', () => {
  test('increment', () => {
    const { getByTestId } = renderTestApp(null, {
      route: '/',
      initialState: {
        counter: { value: 10 },
      },
    })

    const incrementBtn = getByTestId('increment-btn')
    expect(getByTestId('value-title')).toHaveTextContent('10')
    userEvent.click(incrementBtn)
    expect(getByTestId('value-title')).toHaveTextContent('11')
  })
})
