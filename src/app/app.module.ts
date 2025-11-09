import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  providers: [provideRouter(routes)],

  declarations: [AppComponent],
})
export class AppModule {}
