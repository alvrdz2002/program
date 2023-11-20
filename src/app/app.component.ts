import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freelancer';
  showAppContent: boolean = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // Oculta el contenido de la aplicación cuando se encuentra en la ruta de login
        this.showAppContent = !val.url.includes('/login');
      }
    });
  }
}
