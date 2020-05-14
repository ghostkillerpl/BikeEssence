import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild('content') nav: NavController;
  rootPage: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private storage: Storage,
    private router: Router,
    private auth: AuthService,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  toggleMenu() {
    this.menu.toggle(); //Add this method to your button click function
  }
  
	logout(){
		this.auth.logout();
		this.initializeApp();
	}

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
