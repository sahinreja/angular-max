import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap } from "rxjs/internal/operators/exhaustMap";
import { take } from "rxjs/internal/operators/take";
import { AuthService } from "./auth-service";
@Injectable({
    providedIn:'root'
})
export class AuthInterceptorsService implements HttpInterceptor{
    constructor(private authService:AuthService){}
    intercept(req:HttpRequest<any> , next:HttpHandler){
       return this.authService.user.pipe(take(1), exhaustMap((user: any) => {
           if(!user){
               return next.handle(req);
           }
           let modifiedToken = req.clone({
               params:new HttpParams().set('auth' , user.token)
           })
            return next.handle(modifiedToken) 
        }))
    }
}