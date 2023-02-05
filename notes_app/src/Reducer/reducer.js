

const intialState={
    note:[]
}

const reducer=(state=intialState,action)=>{
    switch (action.type){
        case "ADD":
        const {id,data}=action.payload
        return{
            ...state,
            note:[
...state.note,
{
    id:id,
    data:data
}
            ]
        }
        default:return state
    }
}

export default reducer