import { useRef } from "react"
import Input from "../../UI/input"
import "./MealItemForm.css"

const MealItemForm=(props)=>{
    const amountInputRef=useRef()
    const submitHandler=event=>{
event.preventDefault()
const enteredAmount=amountInputRef.current.value
const enteredAmountNumber= +enteredAmount
if (enteredAmount.trim().length===0|| enteredAmountNumber <1|| enteredAmountNumber>5) {
    return
}
props.onAddToCart(enteredAmountNumber)
    }
    
return(
    <form className="form" onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}
    label='Amount'
    input={{
        id: 'amount_' + props.id, 
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }}
/>        <button>+ ADD</button>
    </form>
)
}

export default  MealItemForm