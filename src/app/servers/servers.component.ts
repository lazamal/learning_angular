import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  standalone: false,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServers = true;
  newServerName: string = 'The first server';
  serverCreationStatus: string = 'server was created, its name is ';
  finalText: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = false;
    }, 2000);
  }

  onCreateServer() {
    this.finalText = this.serverCreationStatus + this.newServerName;
  }

  onChangeServerName(event: any) {
    this.newServerName = event.target.value;
  }
}
