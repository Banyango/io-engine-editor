
export interface Component {
    name:string
    properties:Array<Property<any>>
}

export interface Property<T extends Value> {
    name:string;
    value:T;
}

export interface Value {

}

export class VectorValue implements Value {
    type:"vector";
    X:number;
    Y:number;
}

export class FloatValue implements Value {
    type:"float";
    Val:number
}