//Example of custom hooks

import { useState } from "react";

function useInput(arg){
    const [value,setValue] = useState(arg);
    const bind = {
        value,
        onChange : e => setValue(e.target.value)
    }
    const reset = () => {
        setValue('')
    }
    return [value,bind,reset];
}
export default useInput;