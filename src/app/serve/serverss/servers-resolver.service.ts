import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/internal/Observable";
import { ServerService } from './../server.service';

interface Server {
    id: number,
    name: string,
    status: string
}


@Injectable()
export class ServersResolver implements Resolve<Server>{
    constructor(private serverService: ServerService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any {
        return this.serverService.getServer(+route.params['id']);
    }
}