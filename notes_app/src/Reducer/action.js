 export const addNote=(data)=>{
    return{
        type:"ADD",
        payload:{
            id:Math.random(),
            data:data
        }
    }
}

export const deleteNote=()=>{
    return{
        type:"DELETE"
    }
}