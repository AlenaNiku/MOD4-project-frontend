import React from 'react';

const RecipeSearch = (props) => {
    return (
        <form>
            <input type="text" placeholder="search recipes" value={props.searchTerm} onChange={props.searchHandler} />
        </form>

    )
}


export default RecipeSearch

// WHERE SHOULD WE PUT OUR STATE?  the RecipeContainer needs to know about all the changes in the input, bc the list of the recipes live inside the RecipeContainer and the RecipeContainer renders that list. The RecipeContainer needs to change based on the character the user types in. Which means that we need to go to our RecipeContainer and add a PIECE OF STATE TO IT. => GO TO RecipeContainer

// receive the prop of searchTerm, which point to the piece of the state inside of our RecipeContainer component
// don't forget to pass the PROPS as the argument!!!
// since we're changing the state in our RecipeContainer, the fucntion responsible for changing the state should aslo live in our RecipeContainer => GO TO RecipeContainer