import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-serverss',
  templateUrl: './serverss.component.html',
  styleUrls: ['./serverss.component.css']
})
export class ServerssComponent implements OnInit {
  server!:any;
  constructor(private serverService:ServerService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    // const id:number = +this.route.snapshot.params['id']
    // this.server = this.serverService.getServer(id);
    // this.route.params.subscribe(
    //   (params:Params)=>{
    //     this.server = this.serverService.getServer(+params['id'])
    //   }
    // )

    this.route.data.subscribe(
      (data:Data)=>{
        this.server = data['server'];
      }
    )
  }

  onEdit(){
    this.router.navigate(['edit'] , {relativeTo:this.route , queryParamsHandling:'preserve'});
  }

}
