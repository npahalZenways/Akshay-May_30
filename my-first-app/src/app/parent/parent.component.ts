import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [],
  providers:[],
  viewProviders: []
})
export class ParentComponent implements OnInit {

  Nitin = "Amit";

  lastName = "Yadav";

  constructor() { }

  outputReceived(){
    console.log('output from child component received');
  }

  ngOnInit() {
  }

}
