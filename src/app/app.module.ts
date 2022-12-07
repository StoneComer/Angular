import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringPipePipe } from './string-pipe.pipe';
import { Zadanie2Pipe } from './zadanie2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringPipePipe,
    Zadanie2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
