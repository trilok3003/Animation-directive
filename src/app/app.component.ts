import { Component, VERSION } from '@angular/core';
import { Animation, BASIC_ANNIMATIONS, ENTRANCES_ANIMATIONS, EXIT_ANIMATIONS, TEXT_ANIMATIONS } from './animations.types';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  entriesAnimations: Animation[] = [...ENTRANCES_ANIMATIONS];
  exitAnimations: Animation[] = [...EXIT_ANIMATIONS];
  basicAnimations: Animation[] = [...BASIC_ANNIMATIONS];
  textAnimations: Animation[] = [...TEXT_ANIMATIONS];

  eleAnimation = 'roll_in_top';
  textAnimation = 'text_focus_in';

  constructor() { }

  ngOnInit() {}

  changeCardAnimation(event) {
    let animation = event.target.value
    this.eleAnimation = animation;
  }

  changeTextAnimation(event) {
    let animation = event.target.value
    this.textAnimation = animation;
  }
}
