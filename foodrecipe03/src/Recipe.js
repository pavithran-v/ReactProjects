import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import style from './recipe.module.css'
const Result = ({title, calories, image, ingredients}) => (
    <div className={style.recipe}>
                
                        <h1>{title}</h1>
                        <h3>Ingredients</h3>
                        <ol>
                            {ingredients.map( ingredients =>(
                            <li key={Math.random()}>{ingredients.text}</li>
                                ))
                            }
                        </ol>
                        <p>Calories : {Math.round(calories,2)}</p>
                        <img className={style.image} src = {image} alt=""/>
                        
                
                </div>
)
class Recipe extends React.Component
{
    render()
    { 
        return(
            this.props.recipes.map(recipes => (
                <Result key={recipes.recipe.label}
                title={recipes.recipe.label}
                calories={recipes.recipe.calories}
                image={recipes.recipe.image}
                ingredients={recipes.recipe.ingredients}
                />
            ))       
           
        )
    }
}
const mapStateToProps = state => {
    return {
      recipes : state.recipes,
      search : state.search,
     // query : state.query

    }
  }

//   {this.props.recipes.map(recipes => (
//               <Recipe
//               key={recipes.recipe.label}
//               title={recipes.recipe.label} calories={recipes.recipe.calories} image={recipes.recipe.image}
//               ingredients = {recipes.recipe.ingredients}
//               />
//             )
//           )
//         }

export default connect(mapStateToProps)(Recipe);