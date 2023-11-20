// login.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  ngOnInit(){
    const script = document.createElement('script');
    script.src = '../../assets/js/login/login.js';
    document.body.appendChild(script);
  }

}
