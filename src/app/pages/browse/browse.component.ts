import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent {
  userName = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  userProfileImage = JSON.parse(sessionStorage.getItem('loggedInUser')!)
    .picture;
}
