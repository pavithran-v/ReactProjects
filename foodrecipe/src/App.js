import React,{useEffect , useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const  App = () =>
   {
     const APP_ID = '17f4621f';
     const APP_KEY = 'c3d561f8504e386d093d016b060a2b8b';
     //const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`; 
     
     const [recipes , setRecipes] = useState([]);
     const [search, setSearch] = useState("");
     const [query , setQuery] = useState('burger');
     useEffect(() => {
        getRecipes();
        

     },[query]);

     const getRecipes = async () =>
     {
       const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
       const data = await response.json();
       setRecipes(data.hits);
       console.log(recipes);
       
      }

      const getUpdate = e =>
      {
         setSearch(e.target.value);
         //console.log(search);
         
      }

      const getSearch = e => 
      {
        e.preventDefault();
        setQuery(search);
      }
     return(
      <div className="App">
        <form className="search-from" onSubmit={getSearch}>
          <input className="input" type="text" value={search} onChange={getUpdate}/>
          <button className="search-button" type="submit">Search</button>
        </form>
        {recipes.map(recipes => (
              <Recipe
              key={recipes.recipe.label}
              title={recipes.recipe.label} calories={recipes.recipe.calories} image={recipes.recipe.image}
              ingredients = {recipes.recipe.ingredients}
              />
            )
          )
        }
      </div>
    );
   }


export default App;
