import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

export interface CanDeactivateComponent {
    canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
}


export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent>{
    canDeactivate(component: CanDeactivateComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }
    // canDeactivate(component: CanDeactivateComponent,
    //     currentRouter: ActivatedRouteSnapshot,
    //     currentState: RouterStateSnapshot,
    //     nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     return component.canDeactivate();
    // }
}