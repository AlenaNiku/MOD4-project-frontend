import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Recipe from '../components/Recipe';
import RecipeSearch from '../components/RecipeSearch';
import NewRecipe from '../components/NewRecipe'
import RecipeShow from '../components/RecipeShow';

const RecipeContainer = (props) => {
    // console.log("props:", props)

    let recipeArray = props.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} clickHandler={props.clickHandler}  deleteRecipe={props.deleteRecipe} />)

 
    return (
      <div className="recipe-container">
        <Switch>

          <Route path="/recipes/:id" render={({ match }) => {     
              let recipeId = parseInt(match.params.id)
              let recipeObj = props.recipes.find(recipe => recipe.id === recipeId)
            //   console.log("recipeObj:", recipeObj);
              return <RecipeShow recipe={recipeObj} clickHandler={props.clickHandler}  deleteRecipe={props.deleteRecipe} /> 
          }} />
          <Route path="/recipes" render={() => {
              return (
                  <>
                    <NewRecipe submitHandler={props.submitHandler} />
                    <br />
                    <RecipeSearch
                    searchTerm={props.searchTerm}
                    searchHandler={props.searchHandler}
                    />
                    <br />
                    {recipeArray}
                  </>
              )
          }} />

        </Switch>

      </div>
    );
  }


export default RecipeContainer


// map over the array of objects and create an array of components (w/ the received data) -> for each recipe in the array create a recipe component and pass the whole object
// import Recipe component that renders individual Recipe card


