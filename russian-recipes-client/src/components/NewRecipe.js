import React from 'react'

 const NewRecipe = () => {
    return (
        <div>
            <h3>New Recipe Form</h3>
            <form>
                <input type="text" placeholder="name"></input>
                <input type="text" placeholder="image url"></input>
                <input type="text" placeholder="description"></input>
                <input type="submit"></input>
                
            </form>
        </div>
    )
}

export default NewRecipe


// we want the Form to be rendered by the Recipe container (bc we're creating a new recipe and adding it to the list of all the recipes we're fetching inside of this component)