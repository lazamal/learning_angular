import { Component } from '@angular/core';

@Component({
  selector: '[app-servers]',
  standalone: false,
  template: `<app-server> </app-server> <app-server></app-server>`,
  styleUrl: './servers.component.css',
})
export class ServersComponent {}
