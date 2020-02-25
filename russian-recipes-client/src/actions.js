
function fetchRecipes() {
    return function(dispatch) {
        // console.log("dispatch", dispatch)
        fetch("http://localhost:3001/recipes")
          .then(resp => resp.json())
          .then(data => {
            //   console.log("fetched data:", data)
            dispatch({ type: "FETCH_RECIPES", payload: data })
          });
    }
}

function postRecipe(recipe) {
    return function(dispatch) {
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
            .then(data => {
              dispatch({ type: "POST_RECIPE", payload: recipe });
            });
    }
}


export { fetchRecipes, postRecipe }; 


// In addition of ACTION having a TYPE, it should also have a second argument of PAYLOAD (which will contain our data)

// Since ACTION function is where our API data is coming from we have to write FETCH inside of that function (bc of scope)

// Whenever we call a DISPATCH and we pass in fetchRecipes function it should run a fetch and then return an object with TYPE and PAYLOAD

// Since FETCH returns a PROMISE (and the return value of that functon must be an object, for DISPATCH to be able to work) - that's why we use MIDDLEWARE. If we don't we'll see an error: Actions must be plain objects. Use custom middleware for async actions. The middleware that we're using is called THUNK.

// THUNK - is a function that that wraps an expression to delay its evaluation, it allows us to handle async better. THUNK is grabbing our argument from DISPATCH, intercepting the communication between DISPATCH and REDUCER, and then THUNK is checking the argument: if it's an object it doesn't do anything and lets it pass to the REDUCER, but if it's a fucntion - it invokes that fucntion and inside of pur fucnction we will be returning an object and then it will take that object and continue with that communication
// FETCH still returns a promise, so instead of returning the object, we call DISPATCH again