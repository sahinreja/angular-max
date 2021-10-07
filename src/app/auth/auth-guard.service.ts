import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot  , CanActivate , Router, RouterStateSnapshot , UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { take , map } from 'rxjs/operators';
import { AuthService } from './auth-service';
@Injectable({
    providedIn:'root'
})
export class AuthGuards implements CanActivate{
    constructor(private authService:AuthService , private router:Router){}
    // canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot){
    //     let token:any;
    //     this.authService.user.subscribe(
    //         (user:any)=>{
    //             token = user?.token
    //         }
    //     )
    //     if(token){
    //         return true;
    //     }else{
    //         this.router.navigate(['/auth'])
    //         return false;
    //     }
    // }


    canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot) : | boolean | UrlTree | Promise<boolean | UrlTree> | Observable <boolean | UrlTree>{
       return this.authService.user.pipe(
           take(1),
           map(
            (user:any)=>{
                const isAuth = !!user;
                if(isAuth){
                    return true;
                }
                return this.router.createUrlTree(['/auth'])
            }
           )
        )
    }
}