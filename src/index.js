import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


/* REDUX CODE SRAT FROM HERE*/
import {createStore} from 'redux';


const reducer = function(state=0, action){

    var newState = null;
    switch(action.type){
        case "INC":{
            newState = state+action.payload;
            break;
        }
        case "DEC":{
            newState = state-action.payload;
            break;
        }
        default:{
        newState = state;
            break;
        }
    }
    console.log("Old State was: "+state+" , Action was: "+action.type+", Payload was: "+action.payload+ ", Changing Next State to: "+newState);
    return newState;
}

const store = createStore(reducer);

store.subscribe(()=>{
    console.log("store  changed, New State : "+store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "DEC", payload: 5});

/*REDUX CODE ENDS HERE*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
