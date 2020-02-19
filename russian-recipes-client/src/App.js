import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import RecipeContainer from './containers/RecipeContainer';
import RecipeFavorites from './containers/RecipeFavorites';
import Welcome from './components/Welcome';
import NewRecipe from './components/NewRecipe';


class App extends React.Component {
  state = {
    recipes: [],
    favorites: [],
    searchTerm: ""
  };

  // GET the recipes
  componentDidMount() {
    fetch("http://localhost:3001/recipes")
      .then(resp => resp.json())
      .then(data =>
        // console.log(data)
        this.setState({
          recipes: data
        })
      );
  }

  // adding a recipe to favorites
  addRecipe = recipe => {
    // console.log(recipe);
    this.setState({
      favorites: [...this.state.favorites, recipe] // sqare bracket notation means that we're looking for the value this evaluates to in the moment, not literal value
    });
  };

  // removing the recipe from favorites
  removeRecipe = recipe => {
    let favorites = [...this.state.favorites].filter(
      RecipeObj => RecipeObj.id !== recipe.id
    );
    this.setState({ favorites });
  };

  // deleting the recipe   (The filter() method creates a new array with all elements that pass the test implemented by the provided                                   function.)
  deleteRecipe = recipe => {
    // console.log(recipe);
    fetch(`http://localhost:3001/recipes/${recipe.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(data => {
      let Newrecipes = this.state.recipes.filter(
        RecipeObj => RecipeObj.id !== recipe.id
      )
      this.setState({ 
        recipes: Newrecipes
       });
    })   
  };

  // Search form onChange Function
  searchHandler = e => {
    // console.log(e.target.value);
    let searchTerm = e.target.value;
    this.setState({
      searchTerm // it's ok to directly mutate the state here bc it points to a string (which is a pimitive data structure and is                    passed by value) as opposed to arrays and objects (passed by reference, so you have to make a copy first)
    });
  };

  // filter the recipes based on the chararcter the user types in
  filterRecipe = () => {
    return this.state.recipes.filter(recipeObj =>
      recipeObj.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())
    );
  };

  // Form Submit Functions
  recipeSubmitHandler = recipe => {
    // console.log("Argument: ", recipe);
    this.persistRecipe(recipe);
    // we're adding the recipe to the array (create a copy first, don't directly mutate the state)
    // let newArray = [recipe, ...this.state.recipes]
    // this.setState({
    //     recipes: newArray
    // })
  };

  persistRecipe = recipe => {
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(recipe)
    })
      .then(resp => resp.json())
      .then(recipe => {   
        let newArray = [recipe, ...this.state.recipes];
        this.setState({
          recipes: newArray
        });
      });
  };


  render() {
    return (
      <Router>
          <ul className="sticky">
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/create">Create your own Recipe</Link>
            </li>
          </ul>

              {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}

        <div className="App">

            <Switch>

              <Route exact path="/" component={Welcome} />

              <Route 
                path="/create" 
                render={() => (
                <NewRecipe
                submitHandler={this.recipeSubmitHandler} />
                )}
              />

              <Route
                path="/recipes"
                render={() => (
                  <RecipeContainer
                    recipes={this.filterRecipe()}
                    clickHandler={this.addRecipe}
                    searchHandler={this.searchHandler}
                    submitHandler={this.recipeSubmitHandler}
                    deleteRecipe={this.deleteRecipe}
                  />
                )}
              />
              <Route
                path="/favorites"
                render={() => (
                  <RecipeFavorites
                    recipes={this.state.favorites}
                    clickHandler={this.removeRecipe}
                  />
                )}
              />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;

// create the state for favorites: [] and pass it down to the  RecipeFavorites component as a prop - the idea is that it starts off empty, and once we click on the Recipe in our RecipeContainer it fires a function that makes the copy of the current state of Favorites and adds that Recipe we clicked on to it. The function for adding the recipe lives here as well, because this component is holding the state and also responsible for changing that state

// since the state of APP is changing (when we're submitting a new recipe), we need a callback function which will accept our new recipe and add it to the list of our already exsisting recipies