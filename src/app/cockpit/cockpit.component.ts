import { Component, OnInit, Output , EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = "";
  // newServerContent="";
  // newServerName = "";
  // newServerContent="";
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  @Output() onServerCreated = new EventEmitter();
  @Output() onServerBluePrint = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }


  addServer(serverName:HTMLInputElement){
    // this.serverElement.push({
    //   type:'server', 
    //   name:this.newServerName,
    //   content:this.newServerContent
    // })
    this.onServerCreated.emit({type:'server' , name:serverName.value , content:this.serverContentInput.nativeElement.value})
    console.log(this.serverContentInput);
    
  }
  
  addBluePrint(serverName:HTMLInputElement){
    // this.serverElement.push({
    //   type:'blueprint',
    //   name:this.newServerName,
    //   content:this.newServerContent
    // })
    this.onServerCreated.emit({type:'blueprint' , name:serverName.value , content:this.serverContentInput.nativeElement.value})
  }

}
