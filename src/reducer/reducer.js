
const initState=[]

const reducer=(state=initState,action)=>{
    console.log(state)
    if(action.type=="addVid"){
        return action.data
    }
    return state
} 

export default reducer