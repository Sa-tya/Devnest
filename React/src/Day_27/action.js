const Additem = (item)=> {
    
    return {
        type: 'Add',
        payload : item
    }
}

const Removeitem = (id) => {
    return {
        type: 'Remove',
        payload : id
    }
}
export { Additem , Removeitem };