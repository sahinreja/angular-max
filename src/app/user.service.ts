export class UserService{
    aciveUser = ['Max' , 'Smith'];
    inAciveUser = ['John' , 'Deo'];


    setAcitve(id:number){
        this.aciveUser.push(this.inAciveUser[id]);
        this.inAciveUser.splice(id , 1);
    }

    setInActive(id:number){
        this.inAciveUser.push(this.aciveUser[id]);
        this.aciveUser.splice(id , 1);
    }
}