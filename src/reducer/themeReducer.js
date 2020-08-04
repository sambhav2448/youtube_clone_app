
const initState=false

const reducer=(state=initState,action)=>{
    console.log(state)
    if(action.type=="changeTheme"){
        return action.data
    }
    return state
} 

export default reducer