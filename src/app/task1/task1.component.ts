import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  showSecret:boolean = false;
  log:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  toggleSecret(){
    this.showSecret = !this.showSecret
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
  }
  

}
