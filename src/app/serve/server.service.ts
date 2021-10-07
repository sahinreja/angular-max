import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ServerService{
    servers = [
        {
            id:1,
            name:'Productionserver',
            status:'Online'
        },
        {
            id:2,
            name:'TestServer',
            status:'Offline'
        },
        {
            id:3,
            name:'Devserver',
            status:'Offline'
        },
    ]


    getServers(){
        return this.servers
    }
    getServer(id:number){
        const server = this.servers.find((s)=>{
            return s.id === id;
        })

        return server;
    }

    updateServer(id:number , serverInfo:{name:string , status:string}){
        
        const server = this.servers.find(
            (s)=>{
                return s.id === id;
            }
        )

        if(server){
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}