import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteRecipe } from "../actions";


class Recipe extends React.Component {

    state = {
        isToggleOn: true,
        button: true
    }

    handleAddToFaves = () => {
      this.props.addRecipes(this.props.recipe);
      this.setState(state => ({
        isToggleOn: !state.isToggleOn,
        button: !state.button           
      }));
      
    };

    render() {
            let { recipe, deleteRecipe } = this.props;

        return (
            <div className="tile">
                <h1>{recipe.name}</h1>
                <br />
                <Link to={`/recipes/${recipe.id}`}>
                    <img alt="" src={recipe.image_url} />
                </Link>
                <br />
                <p>{recipe.description}</p>
                <button className={this.state.button ? "buttonTrue" : "buttonFalse"} 
                        onClick={ (e) => this.handleAddToFaves() }> {this.state.isToggleOn ? "Favorites" : "Added!"} </button>
                <button id="delete" onClick={ (e) => deleteRecipe(recipe.id)}> Delete </button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
  recipes: state.recipesArray,
});


export default connect(mapStateToProps, { deleteRecipe })(Recipe);



// You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will re-render its component every time the route changes with the same props as <Route> render props: { match, location, history }.

// wrap the clickHAndler in an anonymous function, otherwise it will always fire when rendered, as opposed to only when clicked 

