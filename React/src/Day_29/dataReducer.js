const dataReducer = (state,action)=>{
    if(action.type === "UPDATE_DATA"){
        return action.payload;
    }
    else
    return state;
}

export default dataReducer;