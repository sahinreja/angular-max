import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,CanDeactivate, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CanDeactivateComponent } from './candeactivate-guard.service';

@Component({
  selector: 'app-servers-edit',
  templateUrl: './servers-edit.component.html',
  styleUrls: ['./servers-edit.component.css']
})
export class ServersEditComponent implements OnInit , CanDeactivate<CanDeactivateComponent> {
  server: any;
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.log(this.route.queryParams);

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id']
    console.log(id);
    this.server = this.serverService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.server);

  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus })
    this.changesSaved = true;
    this.router.navigate(['../'] , {relativeTo:this.route})
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to discard changes?');
    }else{
      return true;
    }
  }

}
