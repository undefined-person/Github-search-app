import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"

import listReducer from "./reducers/listReducer"
import historyReducer from "./reducers/historyReducer"

const rootReducer = combineReducers({
    list: listReducer,
    history: historyReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>