import {ADD_ENTITY, DESELECT_ENTITY, EntitiesState, EntityActionTypes, REMOVE_ENTITY, SELECT_ENTITY} from "./types";

const initialState: EntitiesState = {
    objects: [],
    selectedIndex: -1,
};

export function entityReducer(
    state = initialState,
    action: EntityActionTypes
): EntitiesState {
    switch (action.type) {
        case ADD_ENTITY:
            return {
                objects: [...state.objects, action.payload],
                selectedIndex: state.selectedIndex,
            };
        case REMOVE_ENTITY:
            return {
                objects: state.objects.filter(
                    e => e.id !== action.payload.id
                ),
                selectedIndex: state.selectedIndex,
            };
        case SELECT_ENTITY:
            return {
                objects: state.objects,
                selectedIndex: state.objects.indexOf(state.objects.find(e=> e.id == action.payload))
            };
        case DESELECT_ENTITY:
            return {
                objects: state.objects,
                selectedIndex: -1,
            };
        default:
            return state
    }
}