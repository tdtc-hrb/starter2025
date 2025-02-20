import { createStore } from 'redux';
import { ElementaryArithmetic as myReducer } from './reducers/elementaryArithmetic';

const initialState = 0;

const store = createStore(myReducer, initialState);

const myCounter = document.getElementById('counter');

// Set convention
store.subscribe(
    () =>
    {
        let displayFormat = thousand_separator( store.getState() );
        myCounter.innerText = displayFormat;
    }
);

let iCounter = 1;
let iMs = 200;

console.log("Redux started");

setInterval(
    () => {
        console.log(iMs + " ms x " + iCounter);

        // update state
        store.dispatch({ type: 'INC' });

        iCounter++;
    },
    iMs
);

function thousand_separator(cny) {
    let strCny = cny.toString();
    let array = strCny.split("");
    let strNum = "";
    let strDec = "";

    let result = "";

    let iLenCny = strCny.length;
    let index = strCny.indexOf(".");
    if ( index > 0) {
        strNum = strCny.substring(0, index);
        strDec = strCny.substr(index - iLenCny);

        strCny = strNum;
    }

    let len = strCny.length;
    let count = 0;
    for (let j = len; j > 0; j--) {
        count++;
        if (count % 4 == 0) {
            array.splice(j, 0, ",");
            count++;
            len++;
        }
    }

    result = array.join("") + strDec;

    return result;
}
