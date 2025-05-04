import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app/app.component';
import { routes }       from './app/app.routes';

export default () =>
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      { provide: APP_BASE_HREF, useValue: '/' },
    ],
  });
