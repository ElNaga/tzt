import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  imports:[RouterLink],
  template: `
    <h1>About page</h1>
    <a routerLink="/">← Home</a>
  `,
})
export class AboutComponent {}
