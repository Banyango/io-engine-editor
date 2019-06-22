import {ADD_ENTITY, EntitiesState, EntityActionTypes, REMOVE_ENTITY} from "./types";

const initialState: EntitiesState = {
    objects: []
};

export function entityReducer(
    state = initialState,
    action: EntityActionTypes
): EntitiesState {
    switch (action.type) {
        case ADD_ENTITY:
            return {
                objects: [...state.objects, action.payload]
            };
        case REMOVE_ENTITY:
            return {
                objects: state.objects.filter(
                    e => e.id === action.payload.id
                )
            };
        default:
            return state
    }
}