export class Customer {
   

    constructor(private _firstname: string, private _lastname: string){
    }

       /**
         * getFirstName
 : string        */
 public get firstname() {
    return this._firstname;
}
public set firstName(theFirst: string){
    this._firstname = theFirst;
}
 public get lastName() {
    return this._lastname;
}
public set lastName(theLast: string){
    this._firstname = theLast;
}
}

