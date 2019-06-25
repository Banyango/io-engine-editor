import {Component} from "./Types";
import {EntityActionTypes, UPDATE_ENTITY} from "../entities/Types";

interface ComponentState {
    components: Array<Component>
}

export function componentReducer(state: ComponentState, action: EntityActionTypes) {
    switch (action.type) {
        case UPDATE_ENTITY:
            return {
                components: state.components.map((e) => {
                    if (e.id !== action.payload.id) {
                        return e
                    }
                    return action.payload
                }),
            };
        default:
            break;
    }
}
