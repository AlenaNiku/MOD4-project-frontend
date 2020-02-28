import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteRecipe } from "../actions";


const Recipe = (props) => {

    let { recipe, deleteRecipe, addRecipes, recipes } = props

    const handleAddToFaves = () => {
       addRecipes(recipe)
    }
        return (
            <div className="tile">
                <h1>{recipe.name}</h1>
                <br />
                <Link to={`/recipes/${recipe.id}`}>
                    <img alt="" src={recipe.image_url} />
                </Link>
                <br />
                <p>{recipe.description}</p>
                <button onClick={ (e) => handleAddToFaves() }> Favorites </button>
                <button id="delete" onClick={ (e) =>deleteRecipe(recipes, recipe.id)}> Delete Recipe </button>
            </div>
        )
    
}

const mapStateToProps = state => ({
  recipes: state.recipesArray,
});


export default connect(mapStateToProps, {deleteRecipe})(Recipe)

// Sticking with our container vs presentational set up, we don't want to load our presentational Recipe component up with logic. RecipeContainer is where we're connected to Redux, so we'll write in a new mapDispatchToProps() function to include an action there.


// wrap the clickHAndler in an anonymous function, otherwise it will always fire when rendered, as opposed to only when clicked 