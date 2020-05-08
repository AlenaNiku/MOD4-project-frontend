import React from 'react';
import Recipe from '../components/Recipe';
import { connect } from 'react-redux';



const RecipeFavorites = (props) => {
    // console.log("props:", props)

    let recipesFaves = props.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} />)          

    return(
        <>
            <div className="fave">
                <h1 className="faves">FAVORITES</h1>
            </div>
            <div className="favorites-container">
                {recipesFaves}
            </div>
        </>
    )
}

const mapStateToProps = state => ({
 recipes: state.recipeFaves
});

export default connect(mapStateToProps)(RecipeFavorites) 


