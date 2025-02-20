import { createStore } from 'redux';
import { ElementaryArithmetic as myReducer } from './reducers/elementaryArithmetic';

const initialState = 0;

const store = createStore(myReducer, initialState);

const myCounter = document.getElementById('counter');

// Set convention
store.subscribe(
    () =>
    {
        let displayFormat = store.getState();
        myCounter.innerText = displayFormat;
    }
);

let iCounter = 1;

console.log("Redux started");

setInterval(
    () => {
        console.log("1000 ms x " + iCounter);

        // update state
        store.dispatch({ type: 'INC' });

        iCounter++;
    },
    500
);
