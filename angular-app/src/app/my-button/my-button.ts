import { Component } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.html',
  styleUrls: ['./my-button.css'],
})
export class MyButtonComponent {
  message = 'Hyyyyyyy';

  changeMsg(){
    this.message = "Byyyyy";
  }
}
