import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: Order = new Order();

  constructor() { }

  ngOnInit(): void {
  }
      onSubmit() {
        console.log(this.model);
      }

}
