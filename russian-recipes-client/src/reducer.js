
let reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return { ...state, recipesArray: action.payload };
  
    default:
      return state;
  }
};

export default reducer


// REDUCER needs to be listening for an ACTION that tells it how to change our state tree and we also need an ACTION for our DISPATCH to that REDUCER (ACTION ia a function that returns an object)

// REDUCER returns an object which is our new state

// the second argument in the return should be the actual api response, since our reducer only takes in state and action, we can't add it to state (bc we're trying to change the state) so we have to use action as a thing that will also pass our data to our reducer. The action will have a key of PAYLOAD (which will contain our data). 
