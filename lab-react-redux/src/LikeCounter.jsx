import { useState } from "react"
import { createStore } from "redux";
import { decrementNumber,incrementNumber } from "./Action";
import  reducer from "./Reducer";

const store = createStore(reducer)

export default function LikeCounter(){
    

    const [count,setCount]= useState(0);
// subscribe to the redux store 
       store.subscribe(()=>{
        setCount(store.getState().count);
    });
    
    return(
        
        <div>
            <h1 id="app">COUNTER APP</h1>
        <h1 id="count">{count}</h1>
        <div id="btn1">
        <button onClick={()=>store.dispatch(incrementNumber())}>INC</button>
        <button onClick={()=>store.dispatch(decrementNumber())}>DEC</button>
        </div>
        </div>
    )

    }

    


        
    

    
    
