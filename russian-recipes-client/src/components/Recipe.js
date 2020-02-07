import React from 'react';

const Recipe = (props) => {
    let { recipe, clickHandler } = props    // destructured props

    return (
        <div className="tile">
            <h1>{recipe.name}</h1>
            <br />
            <img alt="" src={recipe.image_url} />
            <br />
            <p>{recipe.description}</p>
            <button onClick={ () => clickHandler(recipe) }>Favorites</button>
            <button>See the Recipe</button>
        </div>
    )

}

export default Recipe


// wrap the clickHAndler in an anonymous function, otherwise it will always fire when rendered, as opposed to only when clicked 