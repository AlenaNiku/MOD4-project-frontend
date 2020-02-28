import React from 'react';
import { connect } from 'react-redux';
import { postRecipe } from '../actions';
import { withRouter } from "react-router-dom";


 class NewRecipe extends React.Component {
   state = {
     name: "",
     image_url: "",
     description: ""
   };

   // to capture the value that the user typed in
   // update our state with that value
   changeHandler = (e) => {
     let value = e.target.value;
     this.setState({
       // grab the name of the input that the change is happening to
       // find the key in state by that name
       // update that key in state (all is achieved with the use of square bracket notation)
       [e.target.name]: value
     });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.postRecipe(this.state);         // bc this.state is the whole object = the recipe // CALLING ACTION HERE
      this.props.history.push("/recipes");      // withRouter HOC gives us access to history prop 
   };

   render() {
     return (
        <div className="newrecipe">
          <h1 className="new">NEW RECIPE FORM</h1>
          <form onSubmit={ e => this.handleSubmit(e) }> 
            <input
              type="text" 
              name="name" // name the inputs the same as keys in state
              placeholder="name"
              value={this.state.name}
              onChange={this.changeHandler}
            ></input>
            <br />
            <input
              type="text"
              name="image_url"
              placeholder="image url"
              value={this.state.image_url}
              onChange={this.changeHandler}
            ></input>
            <br />
            <input
              type="text"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.changeHandler}
            ></input>
            <br />
            <button className="submit" type="submit">SUBMIT</button>
          </form>
          <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { postRecipe: recipe => dispatch(postRecipe(recipe)) }
}

export default withRouter(connect(null, mapDispatchToProps)(NewRecipe));



// we always want the form to be a controlled component (by adding values (and onChange event listeners) on inputs that point to smth dynamic that can change, smth in STATE => we have to refactor our component into a class based component). BC it's a class based component now we need render and we're putting the return into render bc it's responsible for returning the JSX
// the values should point to smth in state, that can change based on user input and fire a re-render

// CONNECTING TO THE REDUX STORE
// First, we want to import connect from react-redux and modify our export statement. In this component, we are not currently concerned with writing a mapStateToProps() function (the first argument passed to connect) as this component doesn't need any state. Since we only need to dispatch an action here and we are not getting information from our store, we can use null instead of mapStateToProps as the first argument.
// On submission of the form in our component, we want to send the value we've captured in the local state to be added to our Redux store. With the above set up, addTodo becomes a function in props that is able take arguments. From the Redux docs, we know that needs to be a plain javascript object with a type key describing the type of action. We also need to include the data from the form - in this case, we'll call that key 'payload'.
// When handleSubmit() is called, whatever is currently stored in this.state will be sent off to our reducer via our dispatched action. 

