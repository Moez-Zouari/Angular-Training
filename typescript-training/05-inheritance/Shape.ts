export class Shape {

    
    //---------Constructeur-------
    constructor(private _x: number ,private _y: number){

    }


    //------------ Getter and setter X ----------------
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    
    //-------------- Getter and setter Y -------------
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }



    getInfo() : string {
        return `x=${this._x}, y=${this._y}`;
    }
}