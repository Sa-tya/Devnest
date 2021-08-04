import useInput from './custom_hook'
import App from './getOutput'
import React from 'react'

export const sname = React.createContext();
// export const sage = React.createContext();


function Form(){
    const [name, bindName, resetName] = useInput('Satya Prakash')
    const [age, bindAge, resetAge] = useInput(23)



   const submit = e =>{
        e.preventDefault();
        // alert(`Name is ${name} \n Age is ${age}`)
        
        resetName()
        resetAge()
    }
    return (<div>
        <form onSubmit={submit}>
        Name :- <input {...bindName} type="text" />
        Age :- <input {...bindAge} type="number" />
        <button type="submit">Add</button>
        </form>
        <sname.Provider value={[name,age]}>
        <App />
    </sname.Provider>
    </div>)
}
export default Form;
