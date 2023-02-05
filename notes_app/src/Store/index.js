import { createStore } from "redux"
import rootReducer from "../Reducer/combine"
const Store=()=>{
createStore(rootReducer)

}
export default Store