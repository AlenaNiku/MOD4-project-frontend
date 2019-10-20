import React from 'react';
import Recipe from '../components/Recipe'

class RecipeContainer extends React.Component {

    state = {
        recipes: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/recipes")
            .then(resp => resp.json())
            .then(data => this.setState({
                recipes: data
            }))
    }

    recipes = () => {
        return this.state.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} clickHandler={this.props.clickHandler} />)
    }

    render() {
    
        return (
            <div className="recipe-container">
                <h1>Recipes</h1>
                {this.recipes()}
            </div>
    
        )
    }

}

export default RecipeContainer


// map over the array of objects and create an array of components (w/ the received data) -> for each recipe in the array create a recipe component and pass the whole object
// import Recipe component that renders individual Recipe card

// refactor into a class-based component, it will be responsible for fetching the data and updating the sate with that data. (thransfer that stuff from App component)

// receives a clickHandler as a prop from parent container App, where it points to addRecipe function