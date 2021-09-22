const todoReducer = (state = [],action)=>{
    switch(action.type){
        case 'Add':
            return [...state, action.payload];
        case 'Remove':
            return  state.filter((item,indx)=> indx !== action.payload )
        default :
            return state;
    }
}

export default todoReducer;