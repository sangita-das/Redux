import { Outlet } from 'react-router-dom';
import { Button } from './components/ui/button.tsx';
import {decrement, increment} from './redux/features/counter/counterSlice.ts'
import {useAppSelector} from './redux/hook'
import {useAppDispatch } from './redux/hook'
import Navbar from './components/layout/Navbar.tsx';

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

  <Navbar/>
  <Outlet/>

  

  <br />
  <br />
  <hr />

  <h2>Counter with Redux</h2>

  <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
  <Button onClick={ () => handleIncrement(1)}>Increment</Button>
  <div>{count}</div>
  <Button onClick={handleDecrement}>Decrement</Button>
</div>

)
}

export default App