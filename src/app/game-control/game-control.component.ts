import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval:any;
  lastNumber = 0;
  @Output() intervalFired = new EventEmitter<number>();
  @Output() pauseInterVal = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
    
  }
  

  onStartGame(){
    // this.startGameButtonEvent.emit()
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    },1000)
  }
  onPauseGame(){
    this.pauseInterVal.emit(clearInterval(this.interval));
  }

}
