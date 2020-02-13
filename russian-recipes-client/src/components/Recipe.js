import React from 'react';
import { Link } from 'react-router-dom'

const Recipe = (props) => {
    let { recipe, clickHandler, deleteRecipe } = props    // destructured props

    return (
        <div className="tile">
            <h1>{recipe.name}</h1>
            <br />
            <Link to={`/recipes/${props.recipe.id}`}>
                <img alt="" src={recipe.image_url} />
            </Link>
            <br />
            <p>{recipe.description}</p>
            <button onClick={ () => clickHandler(recipe) }>Favorites</button>
            <button id="delete" onClick={ () => deleteRecipe(recipe) }>Delete Recipe</button>
        </div>
    )

}

export default Recipe


// wrap the clickHAndler in an anonymous function, otherwise it will always fire when rendered, as opposed to only when clicked 