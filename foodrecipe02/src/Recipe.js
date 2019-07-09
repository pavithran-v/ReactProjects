import React,{Fragment} from 'react';
import {connect} from 'react-redux';
//import * as action from './actionCreater/action';
//import {connect} from 'react-redux';
// const Recipe = ({title , calories, image , ingredients}) => (
//     <div>
//         <h1>{title}</h1>
//         <h3>Ingredients</h3>
//         <ol>
//             {ingredients.map( ingredients =>(
//                     <li key={Math.random()}>{ingredients.text}</li>
//                 ))
//             }
//         </ol>
//         <p>Calories : {calories}</p>
//         <img src = {image} alt=""/>
//     </div>
// );

class Recipe extends React.Component
{
    render()
    {
        
        
        return(
            
                <div>
                {
                    this.props.recipes.map(recipes =>(
                        <Fragment>
                        <h1>{recipes.recipe.label}</h1>
                        <h3>Ingredients</h3>
                        <ol>
                            {recipes.recipe.ingredients.map( ingredients =>(
                            <li key={Math.random()}>{ingredients.text}</li>
                                ))
                            }
                        </ol>
                        <p>Calories : {recipes.recipe.calories}</p>
                        <img src = {recipes.recipe.image} alt=""/>
                        </Fragment>
                    ))
                        
                }
                </div>
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