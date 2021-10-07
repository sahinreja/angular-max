import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from './user.mode';
import { environment } from "src/environments/environment";

export interface AuthResponseData {
    email: string,
    expiresIn: string
    idToken: string,
    kind: string
    localId: string
    refreshToken: string,
    registered?: boolean

}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user = new BehaviorSubject<User>(null!);
    private expirationTime:any;

    constructor(private http: HttpClient, private router: Router) {

    }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError), tap((resData) => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            }))
    }

    signIn(email: string, password: string) {
        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError), tap((resData) => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            }))
    }

    verifyEmail(){
        let userData :any = localStorage.getItem('userData');
        userData = JSON.parse(userData);
        return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${environment.firebaseAPIKey}` , 
        {
            requestType:"VERIFY_EMAIL",
            idToken:userData._token
        } , 
        
        {
            headers:new HttpHeaders().set('X-Firebase-Locale' , userData.email)
        }).pipe(catchError(this.handleError))

        
    }


    logout() {
        this.user.next(null!)
        this.router.navigate(['/auth'])
        localStorage.removeItem('userData');
        if(this.expirationTime){
            clearTimeout(this.expirationTime)
        }
        this.expirationTime = null;
    }

    autoLoggin() {
        let data:any = localStorage.getItem('userData');
        let userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(data);
        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email , userData.id , userData._token , new Date(userData._tokenExpirationDate));
        if(loadedUser.token){
            this.user.next(loadedUser)
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    autoLogout(expirationDuration:number){
        this.expirationTime = setTimeout(()=>{
            this.logout()
        },expirationDuration)
    }



    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user))
    }



    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!'
        if (!errorRes.error || !errorRes.error.error.message) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'The email address is already in use by another account.'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'The password is invalid or the user does not have a password.'
                break;
            case 'USER_DISABLED':
                errorMessage = 'The user account has been disabled by an administrator.'
                break;
            case 'INVALID_ID_TOKEN' : 
                errorMessage = `The user's credential is no longer valid. The user must sign in again.`
                break;
        }
        return throwError(errorMessage)
    }
}