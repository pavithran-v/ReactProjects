const intialState = {
    counter : 0,
    results : []
}

const reducer = (state = intialState,action) =>
{
    switch(action.type)
    {
        case 'AGE_UP':
            return{
                ...state,
                counter:state.counter+1,
                results:state.results.concat({id:Math.random(),val:state.counter+1}) 
            }
        case 'AGE_DOWN' :
            return{
                ...state,
                counter:state.counter-1,
                results:state.results.concat({id:Math.random(),val:state.counter-1})
            }
        case 'AGE_INC' :
            return{
                ...state,
                counter:state.counter+action.value,
                results:state.results.concat({id:Math.random(),val:state.counter+action.value})
            }
        case 'AGE_DESC' :
                return{
                    ...state,
                    counter:state.counter-action.value,
                    results:state.results.concat({id:Math.random(),val:state.counter-action.value})
                }
        default : 
            return state;
    }
}


export default reducer;