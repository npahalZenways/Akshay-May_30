import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
  providers:[]
  // inputs: ['inName:name', 'myInput:lName'],
  // class property: input or output name
  // outputs: [ 'myevent:output' ]
})
export class ChildComponent implements OnInit {

  @Input('name') inName;

  @Input() lName = 'hello';

  myInput = 'bye';

  @Output('output') myevent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
