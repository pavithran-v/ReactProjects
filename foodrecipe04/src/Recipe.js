import React from 'react';
import {connect} from 'react-redux';
import style from './recipe.module.css';
import * as action from './actionCreater/action';
const Result = ({title, calories, image, ingredients , add , sub}) => (
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
                        <div>
                            <h3>Add Cart</h3>
                            <button onClick={() => add(title)}>+</button>count<button onClick={() => sub(title)}>-</button>
                        </div>
                
                </div>
)
class Recipe extends React.Component
{
    
    render()
    { 
        
        this.props.recipes.map(recipes => (
            this.props.onAdd({title:recipes.recipe.label,count:0})
        ))
        
        //console.log(res);
        
        return(
            this.props.recipes.map(recipes => (
                <Result key={recipes.recipe.label}
                title={recipes.recipe.label}
                calories={recipes.recipe.calories}
                image={recipes.recipe.image}
                ingredients={recipes.recipe.ingredients}
                add = {this.props.addCount}
                sub = {this.props.subCount}
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

const mapDispatchToProps = dispatch => {
    return {
        onAdd : (title) => dispatch(action.onAdd(title)),
        addCount : (title) => dispatch(action.addCount(title)),
        subCount : (title) => dispatch(action.subCount(title))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Recipe);