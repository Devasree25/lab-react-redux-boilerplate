

const initialState = {
    count:0,
};

//Reducer function to handle the state change based on the action type

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "INCREMENT":
            return{
                count: state.count + 1,
            }

            case "DECREMENT":
                return{
                    count: state.count - 1,
                };
                default:
                    return state;
    


    }
}
export default reducer;
