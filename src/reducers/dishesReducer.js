let initialDishes = [];

const DISHES_SIZE = 20;
for (let i = 0; i < DISHES_SIZE; i++) {
  let obj = i % 2 ? {
    name: 'Pizza ' + i,
    id: i,
    type: 'pizzas'
  } : {
    name: 'Drink ' + i,
    id: i,
    type: 'drinks'
  }
  initialDishes.push(obj);
}

export default function reducer(state={
    dishes: initialDishes,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    // case "FETCH_BOOKS": {
    //   return {...state, fetching: true}
    // }
    // case "FETCH_BOOKS_REJECTED": {
    //   return {...state, fetching: false, error: action.payload}
    // }
    // case "FETCH_BOOKS_FULFILLED": {
    //   return {
    //     ...state,
    //     fetching: false,
    //     fetched: true,
    //     books: action.payload,
    //   }
    // }
  }

  return state
}