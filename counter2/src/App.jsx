import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  incByVal,
  increment,
  removeVal
} from "./redux/functionalities/counter/counterSlice";
import { useState } from "react";

function App() {
  const [input, setinput] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleInc() {
    dispatch(increment());
  }

  function handleDec() {
    dispatch(decrement());
  }
  
  function handleInput() {
    dispatch(incByVal(Number(input))); // Ensure input is a number
    setinput(0); // Clear the input field
  }

  function clear() {
    dispatch(removeVal()); 
    setinput(0); // Clear the input field
  }

  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={handleInc}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDec}>-</button>
      <br /><br />
    
      <input
        type="number"
        value={input}
        onChange={(e) => setinput(Number(e.target.value))} // Ensure input is a number
        placeholder="Enter value to Add"
      />
      <button onClick={handleInput}>Add val</button>
      <br /><br />
      <button onClick={clear}>Clear Values</button>
    </>
  );
}

export default App;

