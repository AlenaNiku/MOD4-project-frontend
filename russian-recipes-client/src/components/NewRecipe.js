import React from 'react'

 class NewRecipe extends React.Component {

    state = {
        name: ""
    }

    // to capture the value that the user typed in
    // update our state with that value
    changeHandler = (e) => {
        let value = e.target.value
        this.setState({
            name: value                            
        })
    }

    render () {
        return (
          <div>
            <h3>New Recipe Form</h3>
            <form>
              <input
                type="text"
                placeholder="name"
                value={this.state.name}
                onChange={this.changeHandler}
              ></input>
              <input
                type="text"
                placeholder="image url"
                value=""
                // onChange={e => console.log("event: ", e)}
              ></input>
              <input
                type="text"
                placeholder="description"
                value=""
                // onChange={}
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