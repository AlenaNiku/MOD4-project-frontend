import React from 'react';

const Recipe = (props) => {

    return (
        <div className="tile">
            <h1>Name: {props.recipe.name}</h1>
            <br />
            <img alt="" src={props.recipe.image_url} />
            <br />
            <p>{props.recipe.description}</p>
            <button>Add to Favorites</button>
        </div>
    )

}


export default Recipe