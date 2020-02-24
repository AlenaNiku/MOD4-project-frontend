import React from 'react';

const Welcome = (props) => {
    // console.log(props.history)
    const handleClick = () => {
        props.history.push("/recipes")  // comes from BrowserRouter props
    }

    return (
        <div className="welcome">
            <h1>WELCOME TO THE TASTE OF RUSSIA</h1>
            <p> the world of authentic Russian cuisine and cooking recipes, the place for lovers of delicious dishes and culture of the Rus.
            In our Russian recipes cookbook you'll find a great number of dishes from ancient times to the present. With our help you'll taste and find out tales about the most popular ethnic dishes of Russian cuisine. We invite you to keep our company and listen to our stories over a cup of tea.</p>
            <button className="welcomebtn" onClick={handleClick}> DISCOVER RECIPES </button>       
        </div>
    )
}


export default Welcome