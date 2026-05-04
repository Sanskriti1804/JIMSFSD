import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyButtonComponent} from './my-button/my-button'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
