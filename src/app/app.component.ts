import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.authSerivce.afUser$;

  constructor(
    private authSerivce: AuthService
  ){}

  logout(){
    this.authSerivce.logout();
  }
}
