export interface IUser {

    _id:string,
    player1name: String,
    player2name:  String,
    gameRules: Number

}

export class User implements IUser{
    _id:string 
    player1name: String;
    player2name: String;
    gameRules: Number;

    
}
