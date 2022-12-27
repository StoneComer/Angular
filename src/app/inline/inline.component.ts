import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor(public meta: Meta) { 
    this.meta.addTags([
      {name: 'title', content: 'The Rock'},
      {name: 'type', content: 'video.movie'},
      {name: 'url', content: '//www.imdb.com/title/tt0117500/'},
    ])
  }

  ngOnInit(): void {
    console.log(this.meta.getTag('name=title'))
  }

}
