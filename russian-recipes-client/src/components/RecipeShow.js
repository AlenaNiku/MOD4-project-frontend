import React from 'react'

 const RecipeShow = (props) => {
     let { recipe } = props

    return (
        <div className="recipe">
            <h1>{recipe.name}</h1>
            <br />
            <img alt="" src={recipe.image_url} />
            <h3>INGREDIENTS</h3>
            {recipe.ingredients}
            <br />
            <h3>INSTRUCTIONS</h3>
            <br />
            {recipe.instructions}
            <br />   
        </div>
    )
}

export default RecipeShow