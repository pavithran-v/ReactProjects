export const onSearch = (value) => ({type:'SEARCH',val:value});
export const onRecipes = (list) => ({type:'RECIPES',val:list});
export const onAdd = (title) => ({type:'CART',val:title});
export const addCount = (title) => ({type:'ADD',val:title});
export const subCount = (title) => ({type:'SUB',val:title});
export const getCounter = (title) => ({type:'VIEW',val:title});