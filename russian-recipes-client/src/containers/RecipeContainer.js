import React from 'react';
import Recipe from '../components/Recipe'
import RecipeSearch from '../components/RecipeSearch'
import NewRecipe from '../components/NewRecipe'

class RecipeContainer extends React.Component {
    
    state = {
        recipes: [],
        searchTerm: "",   
        // filteredRecipes: [] 
    }
    
    
    componentDidMount() {
        fetch("http://localhost:3001/recipes")
        .then(resp => resp.json())
        .then(data => this.setState({
            recipes: data, 
            // filteredRecipes: data
        }))
    }    
    recipes = () => {
        return this.state.recipes.map(recipeObj => <Recipe key={recipeObj.id} recipe={recipeObj} clickHandler={this.props.clickHandler} />)
    }
    
    // Search form onChange Function
    searchHandler = (e) => {
        // console.log(e.target.value);
        let searchTerm = e.target.value
        this.setState({
            searchTerm     // it's ok to directly mutate the state here bc it points to a string (which is a pimitive data structure and is                    passed by value) as opposed to arrays and objects (passed by reference, so you have to make a copy first)
        })
    }

    // Form Submit Functions
    recipeSubmitHandler = (recipe) => {
        console.log("Argument: ", recipe);
        this.persistRecipe(recipe)
        // we're adding the recipe to the array (create a copy first, don't directly mutate the state)
        // let newArray = [recipe, ...this.state.recipes] 
        // this.setState({
        //     recipes: newArray
        // })
    }

    persistRecipe = (recipe) => {
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
    }

    
    render() {
        // filter the recipes based on the chararcter the user types in
        // const filteredRecipes = () => {
        //     return this.state.recipes.filter(recipe => recipe.name.includes(this.state.searchTerm))
        // }
        
        return (
            <div className="recipe-container">
                <h1>Recipes</h1>
                <NewRecipe submitHandler={this.recipeSubmitHandler}/>
                <br />
                <RecipeSearch searchTerm={this.state.searchTerm} searchHandler={this.searchHandler}/>
                <br />
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


// since the state of RecipeContainer is changing (when we're submitting a new recipe), we need a callback function which will accept our new recipe and add it to the list of our already exsisting recipies