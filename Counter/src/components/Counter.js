import { useSelector , useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)
  const show=useSelector(state=>state.showCounter)

const incHandler=()=>{
dispatch ({type:'INCREMENT'})
}
const increaseHandler=()=>{
dispatch ({type:'INCREASE',amount:10})
}

const decHandler=()=>{
  dispatch ({type:'DECREMENT'})
}




  const toggleCounterHandler = () => {
    dispatch({type:'TOGGLE'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
     <div>
       <button onClick={incHandler}>INC</button>
       <button onClick={increaseHandler}>INC By 10</button>

      <button onClick={decHandler}>DEC</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  
  
  );
};

export default Counter;
