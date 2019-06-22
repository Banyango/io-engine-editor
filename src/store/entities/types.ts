
export interface Entity {
    id:number,
    name:string
}

export interface EntitiesState {
    objects:Entity[];
    selectedIndex:number;
}

export const ADD_ENTITY = "ADD_ENTITY";
export const REMOVE_ENTITY = "REMOVE_ENTITY";
export const SELECT_ENTITY = "SELECT_ENTITY";
export const DESELECT_ENTITY = "DESELECT_ENTITY";

interface AddEntityAction {
    type: typeof ADD_ENTITY;
    payload: Entity;
}

interface RemoveEntityAction {
    type: typeof REMOVE_ENTITY;
    payload: Entity;
}

interface SelectEntityAction {
    type: typeof SELECT_ENTITY;
    payload: number;
}

interface DeselectEntityAction {
    type: typeof DESELECT_ENTITY;
    payload: number;
}

export type EntityActionTypes = AddEntityAction | RemoveEntityAction | SelectEntityAction | DeselectEntityAction