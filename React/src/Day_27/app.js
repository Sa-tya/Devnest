import Item from './item'
import { Provider } from 'react-redux';
import  Addtodo from './todo';
// import store from './store'
import rootReducer from "./combineReducer";
import { createStore } from "redux";
const store = createStore(rootReducer);


function App(){
    // console.log(store)
    return <>
        
        <Provider  store={store}>
        <Addtodo />
        <Item />
        </Provider>
    </>
}
export default App;