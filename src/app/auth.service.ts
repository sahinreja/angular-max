export class AuthService{
    isLoggedIn = false;
    constructor(){
    }
    isAuthenticated(){
        const promise = new Promise(
            (resolve , reject)=>{
                setTimeout(()=>{
                    resolve(this.isLoggedIn)
                },800)
            }
        );
        return promise;
    }

    login(){
        this.isLoggedIn = true;
    }

    logout(){
        this.isLoggedIn = false;
    }
}