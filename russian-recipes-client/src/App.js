import React from 'react';
import './App.css';
import RecipeContainer from './containers/RecipeContainer';

class App extends React.Component {

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

  render() {
    return (
      <div className="App">
        <RecipeContainer recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
