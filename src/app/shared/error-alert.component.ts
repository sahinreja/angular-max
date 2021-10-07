import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'app-error-alert',
    template:`
    <div class="backdrop"></div>
    <div class="alert">
    <span class="closebtn" (click)="close()">&times;</span> 
    <strong>Error!</strong> {{err}}
  </div>`,
    styles:[`

       .backdrop{
         position:fixed;
         top:0;
         left:0;
         width:100vw;
         height:100vh;
         background-color:rgba(0,0,0,0.75);
         z-index:50;
       }
      .alert {
        z-index:1000;
        padding: 20px;
        background-color: #f44336;
        color: white;
      }
      
      .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
      }
      
      .closebtn:hover {
        color: black;
      }
    `]
})
export class ErrorAlertComponent{
    @Input() err!:string;
    @Output() closeEventFired = new EventEmitter(); 
    close(){
        this.closeEventFired.emit(null)
    }
}