import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my-first-service';

@Component({
  selector: 'app-service-user',
  templateUrl: './service-user.component.html',
  styles: []
})
export class ServiceUserComponent implements OnInit {

  constructor(
    private myserv : MyService
  ) { }

  ngOnInit() {
    console.log(this.myserv.value)
  }

}
