let initialDishes = [];

const DISHES_SIZE = 20;
for (let i = 0; i < DISHES_SIZE; i++) {
  let obj = i % 2 ? {
    name: 'Pizza ' + i,
    id: i,
    type: 'pizzas',
    price: Math.floor(Math.random() * 10000) + 100  
  } : {
    name: 'Drink ' + i,
    id: i,
    type: 'drinks',
    price: Math.floor(Math.random() * 10000) + 100  
  }
  initialDishes.push(obj);
}

export default function reducer(state={
    arr: initialDishes,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    // case "FETCH_DISHES": {
    //   return {...state, fetching: true}
    // }
    // case "FETCH_DISHES_REJECTED": {
    //   return {...state, fetching: false, error: action.payload}
    // }
    // case "FETCH_DISHES_FULFILLED": {
    //   return {
    //     ...state,
    //     fetching: false,
    //     fetched: true,
    //     arr: action.payload,
    //   }
    // }
  }

  return state
}
