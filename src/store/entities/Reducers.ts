import {
    ADD_ENTITY,
    DESELECT_ENTITY,
    EntitiesState,
    EntityActionTypes,
    REMOVE_ALL_ENTITIES,
    REMOVE_ENTITY,
    SELECT_ENTITY, UPDATE_ENTITY
} from "./Types";
import {componentReducer} from "../components/Reducers";

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
                selectedIndex: state.objects.indexOf(state.objects.find(e => e.id == action.payload))
            };
        case DESELECT_ENTITY:
            return {
                objects: state.objects,
                selectedIndex: -1,
            };
        case UPDATE_ENTITY:
            return {
                objects: state.objects.map(e => {
                    if (e.id !== action.id) {
                        return e
                    }
                    return {
                        ...e,
                        components: componentReducer({components: e.components}, action).components
                    }
                }),
                selectedIndex: state.selectedIndex
            };
        case REMOVE_ALL_ENTITIES:
            return {
                objects: [],
                selectedIndex: -1,
            };
        default:
            return state
    }
}