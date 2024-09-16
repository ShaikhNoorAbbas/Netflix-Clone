declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private route: Router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '816794127491-qlidaoaruqt74e9647gtcpkf0dr78fc2.apps.googleusercontent.com', // Replace with your Google client ID
      callback: (response: any) => this.handleLogin(response),
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'pill',
      width: 'auto',
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  // handle Login
  handleLogin(res: any) {
    if (res) {
      // decode Token
      const decodedToken = this.decodeToken(res.credential);
      console.log(decodedToken);
      // store in session
      sessionStorage.setItem('loggedInUser', JSON.stringify(decodedToken));
      console.log(JSON.stringify(decodedToken));
      // navigate to Home Page
      this.route.navigate(['/browse']);
    }
  }
}
