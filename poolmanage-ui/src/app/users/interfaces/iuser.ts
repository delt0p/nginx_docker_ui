export interface Iuser {
    username: string,
    fname: string,
    lname: string,
    _id: string,
    _v: number
}

export class User implements Iuser{
    username: string;
    fname: string;    
    lname: string;
    _id: string;
    _v: number;
}
