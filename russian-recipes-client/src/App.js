import React from 'react';
import './App.css';
import RecipeContainer from './containers/RecipeContainer';
import RecipeFavorites from './containers/RecipeFavorites';

class App extends React.Component {

  state = {
    favorites: [],
  }

  addRecipe = (recipe) => {
    this.setState({
      favorites: [...this.state.favorites, recipe]  // sqare bracket notation means that we're looking for the value this evaluates to in the moment, not literal value
    })
  }

  removeRecipe = (recipe) => {
    let favorites = [...this.state.favorites].filter(RecipeObj => RecipeObj.id !== recipe.id)
    this.setState({ favorites })
  }



  render() {
    return (
      <div className="App">
        <RecipeContainer clickHandler={this.addRecipe} />
        <RecipeFavorites recipes={this.state.favorites} clickHandler={this.removeRecipe} />
      </div>
    );
  }
}

export default App;

// create the state for favorites: [] and pass it down to the  RecipeFavorites component as a prop - the idea is that it starts off empty, and once we click on the Recipe in our RecipeContainer it fires a function that makes the copy of the current state of Favorites and adds that Recipe we clicked on to it. The function for adding the recipe lives here as well, because this component is holding the state and also responsible for changing that state