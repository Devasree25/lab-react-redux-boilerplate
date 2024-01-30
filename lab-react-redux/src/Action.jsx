
// Action type for for incrementing the number
const increment = "INCREMENT";
// for decrementing the number
const decrement = "DECREMENT";

//action cretor function for incrementing the number
export function incrementNumber(){
    return{
        type: increment,
    };

}
// for decrementing the num
export function decrementNumber(){
    return{
        type : decrement,
    }

}
