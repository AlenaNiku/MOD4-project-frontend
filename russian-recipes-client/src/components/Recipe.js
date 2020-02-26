import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    // console.log(props)
    // let { recipe, clickHandler, deleteRecipe } = props    // destructured props
    
    const handleOnClick = () => {
        props.deleteRecipe(props.recipe.id)
  }

    const handleAddToFaves = () => {
        props.addRecipes(props.recipe.id)
    }

    
    return (
        <div className="tile">
            <h1>{props.recipe.name}</h1>
            <br />
            <Link to={`/recipes/${props.recipe.id}`}>
                <img alt="" src={props.recipe.image_url} />
            </Link>
            <br />
            <p>{props.recipe.description}</p>
            <button onClick={ () => handleAddToFaves() }> Favorites </button>
            <button id="delete" onClick={ () => handleOnClick()}> Delete Recipe </button>
        </div>
    )

}


export default Recipe

// Sticking with our container vs presentational set up, we don't want to load our presentational Recipe component up with logic. RecipeContainer is where we're connected to Redux, so we'll write in a new mapDispatchToProps() function to include an action there.


// wrap the clickHAndler in an anonymous function, otherwise it will always fire when rendered, as opposed to only when clicked 