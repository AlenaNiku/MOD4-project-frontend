import React from 'react';
import Recipe from '../components/Recipe'

const RecipeContainer = (props) => {

    let recipes = props.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} />)

    return (
        <div className="recipe-container">
            <h1>Recipes</h1>
            {recipes}
        </div>

    )
}

export default RecipeContainer

// recieves an array of recipes from the parent component App
// map over the array of objects and create an array of components (w/ the received data) -> for each recipe in the array create a recipe component and pass the whole object
// import Recipe component that renders individual Recipe card