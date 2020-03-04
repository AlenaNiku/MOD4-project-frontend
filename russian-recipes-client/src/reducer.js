
function reducer(
  state = { recipesArray: [], recipe: {}, recipeFaves: [], searchTerm: "", filteredRecipes: [] },
  action
) {
  switch (action.type) {
    case "FETCH_RECIPES":
      return { ...state, recipesArray: action.payload, filteredRecipes: action.payload   };

    case "POST_RECIPE":
      const recipe = action.payload;
      return { ...state, filteredRecipes: [recipe, ...state.filteredRecipes] };

    case "DELETE_RECIPE":
      return { ...state, recipesArray: action.payload };

    case "ADD_RECIPE":
      const recipeFave = action.payload;
      return {
        ...state,
        recipeFaves: [recipeFave, ...state.recipeFaves]
      };

    case "FILTER_RECIPES":
        return {
            ...state, filteredRecipes: action.payload.recipes, searchTerm: action.payload.searchTerm
        }
 
    default:
      return state;
  }
};


export default reducer


// REDUCER needs to be listening for an ACTION that tells it how to change our state tree and we also need an ACTION for our DISPATCH to that REDUCER (ACTION ia a function that returns an object)

// REDUCER returns an object which is our new state
    // STORE will automaticcally pass STATE to REDUCER. we need to let REDUCER know what to do based on the type of Action

// the second argument in the return should be the actual api response, since our reducer only takes in state and action, we can't add it to state (bc we're trying to change the state) so we have to use action as a thing that will also pass our data to our reducer. The action will have a key of PAYLOAD (which will contain our data). 



// COMBINE REDUCER will allow us to create a single variable, that will point to the return of this combineReducers function. combineReducers takes an object as it's argument -> this object becomes our state
// Wrire a separarte reducer function for every piece of state

// Combine Reducer allows us to add the DEFAULT STATE here
