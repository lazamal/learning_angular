import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
