import React from 'react';
import Recipe from '../components/Recipe'
import RecipeSearch from '../components/RecipeSearch'
import NewRecipe from '../components/NewRecipe'

const RecipeContainer = (props) => {
    // console.log("props:", props)

    let recipeArray = props.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} clickHandler={props.clickHandler} />)

 
    return (
      <div className="recipe-container">
        <h1>Recipes</h1>
        <NewRecipe submitHandler={props.submitHandler} />
        <br />
        <RecipeSearch
          searchTerm={props.searchTerm}
          searchHandler={props.searchHandler}
          />
        <br />
          {recipeArray}
      </div>
    );
  }


export default RecipeContainer


// map over the array of objects and create an array of components (w/ the received data) -> for each recipe in the array create a recipe component and pass the whole object
// import Recipe component that renders individual Recipe card

// receives a clickHandler as a prop from parent container App, where it points to addRecipe function

