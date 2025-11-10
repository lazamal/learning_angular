import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  standalone: false,
  templateUrl: `./servers.component.html`,
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServers = true;
  newServerName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = false;
    }, 2000);
  }

  onCreateServer() {
    console.log('add server');
  }

  onChangeServerName(event) {
    this.newServerName = event.target.value;
  }
}
