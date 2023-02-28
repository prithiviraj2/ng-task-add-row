import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 @Input() item!:any[];  
  items: any =[];
  constructor() { }  
  ngOnInit() { 
    
    this.items = this.item
    console.log(this.items); 
  } 
  

  
}
