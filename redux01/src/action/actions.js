export const addAgeAsync = () => ({type: 'AGE_UP'});
export const addAge = () => {
    return dispatch => 
    {
        setTimeout(() => {
            dispatch(addAgeAsync());
        }, 5000);
    }
};
export const subAge = () => ({type : 'AGE_DOWN'});
export const incAge = () => ({type:'AGE_INC',value:5});
export const descAge = () => ({type:'AGE_DESC',value:5});