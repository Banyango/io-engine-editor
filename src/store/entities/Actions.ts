import {ADD_ENTITY, DESELECT_ENTITY, Entity, SELECT_ENTITY} from "./Types";

export function addEntity(entity: Entity) {
    return {
        type: ADD_ENTITY,
        payload:entity
    }
}

export function removeEntity(entity: Entity) {
    return {
        type: ADD_ENTITY,
        payload:entity
    }
}

export function selectEntity(index: number) {
    return {
        type: SELECT_ENTITY,
        payload:index
    }
}

export function deselectEntity() {
    return {
        type: DESELECT_ENTITY,
    }
}