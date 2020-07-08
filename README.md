# "Taste of Russia" project-frontend
Welcome to the "Taste of Russia", a React/Redux project for searching Russian recipes.
## Installation
1. Head over to the Backend repo first, clone it down and run the server (https://github.com/AlenaNiku/MOD4-project-backend)
1. Clone this repo, cd into that directory, and run $npm install && npm start - this will install all the dependancies and open the app in your browser on a development server (localhost:3000 if you’re on Mac)
## Usage example
* Browse Russian recipes and see all the ingredients and instructions
* Use the search bar to filter the recipes and find the one you need
* Add recipes to your Favorites
* Delete recipes, which will delete them from the database
* Create your own recipe and save it in the database, with the help of Redux state management library
``` export const postRecipe = (recipe) => dispatch => {
        fetch("http://localhost:3001/recipes",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              accepts: "application/json"
            },
            body: JSON.stringify(recipe)
          })
            .then(resp => resp.json())
            .then(recipe => {
              dispatch({ type: "POST_RECIPE", payload: recipe });
            });
    }
 ```
 ## Meta
 Alena Nikulina - alenanikulina0@gmail.com - https://medium.com/@alenanikulina0
 ## Contributing
1. Fork it (https://github.com/yourname/yourproject/fork)
1. Create your feature branch (git checkout -b feature/fooBar)
1. Commit your changes (git commit -am 'Add some fooBar')
1. Push to the branch (git push origin feature/fooBar)
1. Create a new Pull Request
