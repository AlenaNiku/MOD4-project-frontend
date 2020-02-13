import React from 'react';
import Recipe from '../components/Recipe'


const RecipeFavorites = (props) => {
    // console.log(props);

    const recipes = () => {
        return props.recipes.map(recipeObj => <li key={recipeObj.id}><Recipe recipe={recipeObj} clickHandler={props.clickHandler}/></li>)
    }
    return(
        <div className="favorites-container">
            <h1>Favorites</h1>
            <ul>{recipes()}</ul>
        </div>
    )
}


export default RecipeFavorites 

// the clickHandler here is recived through the prop and points to removeRecipe function inside the parent App component