export class Shape{
    constructor(private _x: number, private _y: number){

    }

    public get x(){
        return this._x;
    }

    public set x(value){
        this._x = value;
    }
    public get y(){
        return this._y;
    }

    public set y(value){
        this._y = value;
    }

    getInfo(): string{
        return `x=${this._x}, y=${this._y}`;
    }



}