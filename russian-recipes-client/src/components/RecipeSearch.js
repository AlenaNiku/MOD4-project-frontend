import React from 'react';
import { connect } from 'react-redux';
import { filterRecipes } from '../actions'

class RecipeSearch extends React.Component {


  render() {
    return (
      <form>
        <input
          type="textsearch"
          placeholder="search..."
          value={this.props.searchTerm}
          onChange={(e) => this.props.filterRecipes(this.props.recipes, e.target.value)}  // CALLING ACTION HERE
        />
      </form>
    );
  }
}

//  we want to dispatch an action when the search input changes that in turn will update the store (filter the recipes based on the searhTerm)

const mapStateToProps = state => ({
    recipes: state.recipesArray,
    searchTerm: state.searchTerm 
})

export default connect(mapStateToProps, { filterRecipes })(RecipeSearch)





// REACT
// WHERE SHOULD WE PUT OUR STATE?  the App needs to know about all the changes in the input, bc the list of the recipes lives inside the App and the App renders that list. The App needs to change based on the character the user types in. Which means that we need to go to our App and add a PIECE OF STATE TO IT.

// receive the prop of searchTerm, which point to the piece of the state inside of our RecipeContainer component
// don't forget to pass the PROPS as the argument!!!
// since we're changing the state in our App, the fucntion responsible for changing the state should aslo live in our App 