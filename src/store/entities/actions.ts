import {ADD_ENTITY, Entity} from "./types";

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