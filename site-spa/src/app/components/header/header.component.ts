import { Observable } from 'rxjs';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { UserService } from 'src/app/sevices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$!: Observable<User | null>;

  constructor(private service: UserService, private router: Router) {
    this.user$ = service.getToken();
  }

  logout = () => {
    this.service.logout();
    this.router.navigate(['']);
  }
}
