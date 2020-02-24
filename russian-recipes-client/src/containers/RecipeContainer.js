import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions'
import Recipe from '../components/Recipe';
import RecipeSearch from '../components/RecipeSearch';
import RecipeShow from '../components/RecipeShow';


class  RecipeContainer extends React.Component {

    componentDidMount() {
      this.props.fetchRecipes()
    }

    render() {
                // console.log("props:", props);

      let recipes = this.props.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} clickHandler={this.props.clickHandler}  deleteRecipe={this.props.deleteRecipe} />)
  
      return (
        <div className="recipe-container">
          <Switch>
  
            <Route path="/recipes/:id" render={({ match }) => {       // prop that comes from BrowseRouter
                let recipeId = parseInt(match.params.id)
                let recipeObj = this.props.recipes.find(recipe => recipe.id === recipeId)
              //   console.log("recipeObj:", recipeObj);
                return <RecipeShow recipe={recipeObj} clickHandler={this.props.clickHandler}  deleteRecipe={this.props.deleteRecipe} /> 
            }} />
            <Route path="/recipes" render={() => {
                return (
                    <>
                      <RecipeSearch
                      searchTerm={this.props.searchTerm}
                      searchHandler={this.props.searchHandler}
                      />
                      <br />
                      {recipes}
                    </>
                )
            }} />
          </Switch>
        </div>
      );
    }
  }

 
function mapStateToProps(state) {
  return { recipes: state.recipesArray };
}

function mapDispatchToProps(dispatch) {
  // console.log("working?")
  return { fetchRecipes: () => dispatch(fetchRecipes()) }; // this dispatch gets intercepted by thunk
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);


// map over the array of objects and create an array of components (w/ the received data) -> for each recipe object in the array create an instance of a recipe component and pass the whole object
// import Recipe component that renders individual Recipe card

// CONNECT is a higher order component (that returns a HOC). It connects our component to the Redux Store and allows us to use mapStateToProps and mapDispatchToProps. It takes the return value of those functions and merges it int o the props of our component 
  // mapStateToProps - a function used to pass parts of STORE/STATE TREE into a component's props. It is called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.
  // mapDispatchToProps - a fucntion used to give components access to CALLBACK FUNCTIONS that call on the STORE'S DISPATCH function (DISPATCH calls REDUCER that makes changes to our state). 




