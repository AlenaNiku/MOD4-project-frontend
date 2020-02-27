import React from 'react';
import { connect } from 'react-redux';

class RecipeSearch extends React.Component {

  // Search form onChange Function
  searchHandler = (e) => {
//   console.log(e.target.value);
    let searchTerm = e.target.value;
    this.setState({
      searchTerm // it's ok to directly mutate the state here bc it points to a string (which is a pimitive data structure and is                    passed by value) as opposed to arrays and objects (passed by reference, so you have to make a copy first)
    });
  };

  render() {
    return (
      <form>
        <input
          type="textsearch"
          placeholder="search..."
          value={this.searchTerm}
          onChange={this.searchHandler}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
    // console.log(state.searchTerm)
  return { searchTerm: state.searchTerm };
}

export default connect(mapStateToProps)(RecipeSearch)

// WHERE SHOULD WE PUT OUR STATE?  the App needs to know about all the changes in the input, bc the list of the recipes lives inside the App and the App renders that list. The App needs to change based on the character the user types in. Which means that we need to go to our App and add a PIECE OF STATE TO IT.

// receive the prop of searchTerm, which point to the piece of the state inside of our RecipeContainer component
// don't forget to pass the PROPS as the argument!!!
// since we're changing the state in our App, the fucntion responsible for changing the state should aslo live in our App 