import { Component } from '@angular/core';
import { UsernameInputComponent } from '../username-input/username-input.component';

@Component({
  selector: 'app-username-paragraph',

  templateUrl: './username-paragraph.component.html',
  styleUrl: './username-paragraph.component.css',
})
export class UsernameParagraphComponent {
  userName = UsernameInputComponent.userName;
}
