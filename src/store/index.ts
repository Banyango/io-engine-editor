import {combineReducers, createStore} from "redux";
import {entityReducer} from "./entities/reducers";

const rootReducer = combineReducers({
    entity: entityReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer,
    );
}
