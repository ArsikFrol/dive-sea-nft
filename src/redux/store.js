import { createStore, combineReducers } from "redux";

import allUcer from "./reducer/allUser";
import allCollections from "./reducer/allCollection";

const rootReducer = combineReducers({
    allUser: allUcer,
    allCollections: allCollections
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())

export default store