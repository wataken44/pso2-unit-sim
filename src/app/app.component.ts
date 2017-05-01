import { Component } from '@angular/core';

import { UnitSelectorComponent } from './unit-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    unit_sets = [1,2];
}
