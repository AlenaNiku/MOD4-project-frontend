import React from 'react'

 class NewRecipe extends React.Component {
   state = {
     name: "",
     image_url: "",
     description: ""
   };

   // to capture the value that the user typed in
   // update our state with that value
   changeHandler = e => {
     let value = e.target.value;
     this.setState({
       // grab the name of the input that the change is happening to
       // find the key in state by that name
       // update that key in state (all is achieved with the use of square bracket notation)
       [e.target.name]: value
     });
   };

   submitHandler = e => {
     e.preventDefault();
     this.props.submitHandler(this.state); // bc this.state is the whole object = the recipe
     this.setState({
       name: "",
       image_url: "",
       description: ""
     }); // clearing out the inputs
   };

   render() {
     return (
       <div>
         <h3>New Recipe Form</h3>
         <form onSubmit={this.submitHandler}>
           <input
             type="text"
             name="name" // name the inputs the same as keys in state
             placeholder="name"
             value={this.state.name}
             onChange={this.changeHandler}
           ></input>
           <input
             type="text"
             name="image_url"
             placeholder="image url"
             value={this.state.image_url}
             onChange={this.changeHandler}
           ></input>
           <input
             type="text"
             name="description"
             placeholder="description"
             value={this.state.description}
             onChange={this.changeHandler}
           ></input>
           <input type="submit"></input>
         </form>
       </div>
     );
   }
 }

export default NewRecipe


// we want the Form to be rendered by the Recipe container (bc we're creating a new recipe and adding it to the list of all the recipes we're fetching inside of this component)

// we always want the form to be a controlled component (by adding values (and onChange event listeners) on inputs that point to smth dynamic that can change, smth in STATE => we have to refactor our component into a class based component). BC it's a class based component now we need render and we're puttin the return into render bc it's responsible for returning the JSX

// the values should point to smth in state, that can change based on user input and fire a re-render