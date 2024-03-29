import {Component} from "../components/Types";

export interface Entity {
    id:number;
    name:string;
    components:Array<Component>
}

export interface ComponentUpdate {
    entityId:number;
    component:Component
}

export interface EntitiesState {
    objects:Entity[];
    selectedIndex:number;
}

export const ADD_ENTITY = "ADD_ENTITY";
export const REMOVE_ENTITY = "REMOVE_ENTITY";
export const REMOVE_ALL_ENTITIES = "REMOVE_ALL_ENTITY";
export const SELECT_ENTITY = "SELECT_ENTITY";
export const DESELECT_ENTITY = "DESELECT_ENTITY";
export const UPDATE_ENTITY = "UPDATE_ENTITY";

interface AddEntityAction {
    type: typeof ADD_ENTITY;
    payload: Entity;
}

interface RemoveEntityAction {
    type: typeof REMOVE_ENTITY;
    payload: Entity;
}

interface RemoveAllEntityAction {
    type: typeof REMOVE_ALL_ENTITIES;
}

interface SelectEntityAction {
    type: typeof SELECT_ENTITY;
    payload: number;
}

interface DeselectEntityAction {
    type: typeof DESELECT_ENTITY;
}

interface UpdateEntityAction {
    type: typeof UPDATE_ENTITY;
    id: number;
    payload:Component
}

export type EntityActionTypes = AddEntityAction | RemoveEntityAction | SelectEntityAction | DeselectEntityAction | RemoveAllEntityAction | UpdateEntityAction