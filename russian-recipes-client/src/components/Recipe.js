import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteRecipe } from "../actions";
import { withRouter } from "react-router-dom";


const Recipe = (props) => {

    let { recipe, deleteRecipe, addRecipes, recipes } = props

    const handleAddToFaves = () => {
      addRecipes(recipe);
      props.history.push("/favorites");          // comes from BrowserRouter props
    };

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


export default withRouter(connect(mapStateToProps, { deleteRecipe })(Recipe));



// You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will re-render its component every time the route changes with the same props as <Route> render props: { match, location, history }.

// wrap the clickHAndler in an anonymous function, otherwise it will always fire when rendered, as opposed to only when clicked 

