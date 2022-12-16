import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XpAnimationDirective } from './animation.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, XpAnimationDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
