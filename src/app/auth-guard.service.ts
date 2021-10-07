import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild{
    
    constructor(private authService:AuthService , private router:Router){

    }
    canActivate(router : ActivatedRouteSnapshot ,state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated().then(
            (authenticated: any) => {
                if (authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
        );
    }
    canActivateChild(route:ActivatedRouteSnapshot , state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{ 
        return this.canActivate(route  , state);
    }
} 