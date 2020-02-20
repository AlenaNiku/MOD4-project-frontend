import React from 'react';
import Recipe from '../components/Recipe'


const RecipeFavorites = (props) => {
    // console.log(props);

    const recipes = () => {
        return props.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} clickHandler={props.clickHandler}/>)
    }
    return(
        <>
        <h1 className="fave">Favorites</h1>
        <div className="favorites-container">
            {recipes()}
        </div>
        </>
    )
}


export default RecipeFavorites 

// the clickHandler here is recived through the prop and points to removeRecipe function inside the parent App component