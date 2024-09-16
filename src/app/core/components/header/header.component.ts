import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input({ required: true }) userImage: any;
  @Input({ required: true }) userName: any;
  navLists = [
    'Home',
    'TV Shows',
    'Movies',
    'New & Popular',
    'My List',
    'Browse By Language',
  ];
  constructor(private auth: AuthService) {}
  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
