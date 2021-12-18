import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import * as API from '../services/Api';

// import 

const epicMiddleware = createEpicMiddleware({
    dependencies: API
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create store 
const configureStore = (initialState: any) => {

    //configure middleware 
    const middleware = [epicMiddleware];

    const enhancer = composeEnhancers(applyMiddleware(...middleware));

    return createStore(reducers, initialState, enhancer)

}

// export {store, actions};