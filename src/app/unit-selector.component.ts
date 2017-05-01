import { Component } from '@angular/core';

import { REAR_UNITS, ARM_UNITS, LEG_UNITS, UNIT_SETS } from './unit-parameter-data';
import { LABEL_SHORT, LABEL_LONG } from './unit-parameter';

@Component({
  selector: 'unit-selector',
  templateUrl: './unit-selector.component.html'
})

export class UnitSelectorComponent {
  label_short = LABEL_SHORT;

  rear_units = REAR_UNITS;
  rear_index = 0;

  arm_units = ARM_UNITS;
  arm_index = 0;

  leg_units = LEG_UNITS;
  leg_index = 0;

  unit_sets = UNIT_SETS;
  unit_set_index = this.unit_sets.length - 1;

  updateUnitSet() {
    for(let idx = 0; idx < this.unit_sets.length; ++idx) {
      if(this.unit_sets[idx].match(
        this.rear_units[this.rear_index].name,
        this.arm_units[this.arm_index].name,
        this.leg_units[this.leg_index].name
      )) {
        this.unit_set_index = idx;
        break;
      }
    };
  }
}
