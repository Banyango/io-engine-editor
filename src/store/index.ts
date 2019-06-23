import {combineReducers, createStore} from "redux";
import {entityReducer} from "./entities/reducers";

const rootReducer = combineReducers({
    entity: entityReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
