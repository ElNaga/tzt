import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ]
}).catch(console.error);

document.body.addEventListener('click', (event: MouseEvent) => {
  const target = event.target;
  // guard: only proceed if it's an Element
  if (!(target instanceof Element)) {
    return;
  }

  // now we can safely use closest()
  const btn = target.closest('.btn-stroked') as HTMLElement | null;
  if (!btn) {
    return;
  }

  // compute click coordinates relative to the button
  const rect = btn.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // set CSS vars for the ripple
  btn.style.setProperty('--ripple-x',  `${x}px`);
  btn.style.setProperty('--ripple-y',  `${y}px`);
});