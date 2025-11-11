import { Component } from '@angular/core';

@Component({
  selector: 'app-username-input',
  standalone: false,
  templateUrl: './username-input.component.html',
  styleUrl: './username-input.component.css',
})
export class UsernameInputComponent {
  userName = '';
  static userName: any;

  emptyUserName() {
    this.userName = '';
  }
}
