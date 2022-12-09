import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/reducers/counterReducer'
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue'

const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => [
    dispatch(decrement()),
  ]

  return (
    <div>
      <h1 data-testid="value-title">
        {value}
      </h1>
      <button
        type="button"
        onClick={onIncrement}
        data-testid="increment-btn"
      >
        increment
      </button>
      <button
        type="button"
        onClick={onDecrement}
        data-testid="decrement-btn"
      >
        decrement
      </button>
    </div>
  )
}

export default Counter
