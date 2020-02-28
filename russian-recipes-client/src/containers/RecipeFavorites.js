import React from 'react';
import Recipe from '../components/Recipe';
import { connect } from 'react-redux';



const RecipeFavorites = (props) => {
    // console.log("props:", props)

    let recipesFaves = props.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} />)          

    return(
        <>
            <div className="fave">
                <h1>FAVORITES</h1>
            </div>
            <div className="favorites-container">
                {recipesFaves}
            </div>
        </>
    )
}

function mapStateToProps(state) {
  return { recipes: state.recipeFaves };
}


export default connect(mapStateToProps)(RecipeFavorites) 

// Once the recipe is added to Favorites I should write a dispatch action from here to remove that recipe from Favorites container

