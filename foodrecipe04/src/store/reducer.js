const intialState = {
    recipes : [],
    search : 'burger',
    cart : []
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
        case 'CART':
            return{
                ...state,
                cart : state.cart.concat(action.val)
            }
        case 'ADD':
                const newState = {...state};
                const index = state.cart.findIndex(x => x.title === action.val);
                console.log(state.cart[index].count+1);
                //const res = state.cart[index].count+1;
                newState.cart[index].count = state.cart[index].count+1;
                return newState;
        case 'SUB':
                const newState1 = {...state};
                const index1 = state.cart.findIndex(x => x.title === action.val);
                console.log(state.cart[index1].count-1);
                //const res = state.cart[index].count+1;
                newState1.cart[index1].count = state.cart[index1].count-1;
                return newState1;
        case 'VIEW' : 
                //const index = state.cart.findIndex(x => x.title === action.val);
                return state;
        default:
            return state;
    }
}


export default reducer;