import { Shape } from "./Shape";

export class Rectangle extends Shape {
    
    //----------Constructeur
    constructor (theX : number , theY : number, private _width: number , private _length: number)
    {
        super (theX,theY);
    }



    //---------Getters--------
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    //----------Get Info

    getInfo() : string {
        return super.getInfo() +`, width = : ${this._width} , large = : ${this._length}`;
    }

   




} 