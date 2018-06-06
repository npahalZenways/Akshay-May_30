import { Component } from '@angular/core';

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styles: ['.red{color: red}', '.blue{background-color: blue}']
})
export class InBuiltDirectivesComponent {

  redClass = true;
  blueClass = false;

  myName = 'Nitin';

  myArr = [1,2,3,4,5]

  constructor() { }

}
