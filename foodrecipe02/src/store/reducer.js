const intialState = {
    recipes : [],
    search : 'burger' 
}

const reducer = (state = intialState,action) =>
{
    switch (action.type) {
        case 'SEARCH':
            //console.log(action.val);
            
            return{
                ...state,
                search:action.val
            }
        case 'RECIPES':
            return{
                ...state,
                recipes : action.val
            }
        default:
            return state;
    }
}


export default reducer;