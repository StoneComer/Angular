import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(public desc: Meta)
  {this.desc.addTag({name:'desc', content: 'root-desc'})}
  ngOnInit(): void {
    console.log(this.desc.getTag('name=desc'))
  }
}
