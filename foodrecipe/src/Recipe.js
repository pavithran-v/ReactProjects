import React from 'react';


const Recipe = ({title , calories, image , ingredients}) => (
    <div>
        <h1>{title}</h1>
        <h3>Ingredients</h3>
        <ol>
            {ingredients.map( ingredients =>(
                    <li key={Math.random()}>{ingredients.text}</li>
                ))
            }
        </ol>
        <p>Calories : {calories}</p>
        <img src = {image} alt=""/>
    </div>
);


export default Recipe;