export  const addTodo=(data)=>{
    return{
        type:'ADD',
        payload:{
            id:Math.random(),
            data:data
        }
    }
}


export const deleteTodo=(id)=>{
    return{
        type:'DELETE',
        id
    }
}
export const removeTodo=()=>{
    return{
        type:'REMOVE'
    }
}