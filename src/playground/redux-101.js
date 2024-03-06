console.log('Redux-101!');
import { createStore } from 'redux';

//increment count without destructuring
// const incrementCount = ( payload = {} ) => ({ //destructuring and setting default value
//     type:'INCREMENT',
//     incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ( {incrementBy = 1} = {} ) => ({ //destructuring and setting default value
    type:'INCREMENT',
    incrementBy
});
const decrementCount = ( {decrementBy = 1} = {} ) => ({ //destructuring and setting default value
    type:'DECREMENT',
    decrementBy
});
const setCount = ( {count = 1} = {} ) => ({ //destructuring and setting default value
    type:'SET',
    count
});
const resetCount = () => ({ //destructuring and setting default value
    type:'RESET'
});

//Reducers
//1. are pure funtions.
//2. never change state or action.

const storeReducer = ( state = { count:0 }, action) => {
    switch(action.type){
        case 'INCREMENT': 
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            //const decrementBy = action.hasOwnProperty('decrementBy') === true ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };  
        case 'SET': 
            return {
                count: action.count
            }; 
        case 'RESET': 
            return {
                count: 0
            }; 
        default: 
            return state;
    }
} 

const store = createStore(storeReducer);
//console.log('=Default State=', store.getState());

store.subscribe(() => {
    console.log('=Subscribe State=', store.getState());
});

//Increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
//Reset
store.dispatch(resetCount());
//Decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
//Set
store.dispatch(setCount({count: 101}));
