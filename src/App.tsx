import {decrement, increment} from './redux/features/counter/counterSlice.ts'
import {useAppSelector} from './redux/hook'
import {useAppDispatch } from './redux/hook'

function App() {
const dispatch = useAppDispatch();
const {count} = useAppSelector( (state) => state.counter);



const handleIncrement = (amount: number) => {
dispatch(increment ({ amount: amount}))
}

const handleDecrement = () => {
dispatch(decrement ())
}


return (

<div>
  <h2>Counter with Redux</h2>

  <button onClick={() => handleIncrement(1)}>Increment by 5</button>
  <button onClick={ () => handleIncrement(5)}>Increment</button>
  <div>{count}</div>
  <button onClick={handleDecrement}>Decrement</button>
</div>

)
}

export default App