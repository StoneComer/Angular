import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() text: any
  count = 0;
  counter (){
    this.count++ ;
  }
  constructor() { }
  
  ngOnInit(): void {
    
  }
  ngOnClick(): void {
    
  }
}
