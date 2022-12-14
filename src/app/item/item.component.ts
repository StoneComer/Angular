import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) { }

  params(): void{
    console.log(this.activeRouter.snapshot.queryParams);
  }

  ngOnInit(): void {
  }
  

}
