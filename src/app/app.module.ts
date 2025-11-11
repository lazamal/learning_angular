import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { UsernameInputComponent } from './username-input/username-input.component';
import { UsernameParagraphComponent } from './username-paragraph/username-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameInputComponent,
    UsernameParagraphComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
