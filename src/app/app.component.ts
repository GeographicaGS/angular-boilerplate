import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './common/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (
    private translate: TranslateService,
    private auth: AuthenticationService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }
}
