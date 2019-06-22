
export interface Entity {
    id:number,
    name:string
}

export interface EntitiesState {
    objects:Entity[]
}

export const ADD_ENTITY = "ADD_ENTITY";
export const REMOVE_ENTITY = "REMOVE_ENTITY";

interface AddEntityAction {
    type: typeof ADD_ENTITY;
    payload: Entity;
}

interface RemoveEntityAction {
    type: typeof REMOVE_ENTITY;
    payload: Entity;
}

export type EntityActionTypes = AddEntityAction | RemoveEntityAction