import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {};
  authenticationState = new BehaviorSubject(false);
  userStatus = new BehaviorSubject(0);

  constructor(
    private http: HttpClient,
    private storage: Storage,
    public alertCtrl: AlertController,
    public router: Router,
    private plt: Platform
    ) {
      this.plt.ready().then(() => {
        this.checkToken();
      });
     }

    checkToken() {
      this.storage.get(TOKEN_KEY).then(res => {
        if (res) {
        this.authenticationState.next(true);
        }
      });
    }
  
    getToken() {
      return localStorage.getItem('token');
    }

  login(username, password) {
		const post_data = new HttpParams()
			.set('username', username)
			.set('password', password)
			.set('client_id', '6')
			.set('client_secret', 'Jwzfdd8srSeKs1wzz48L12FadlM1CVmqZSrRceZ1')
			.set('scope', '')
			.set('grant_type', 'password');

		return this.http.post('http://localhost/oauth/token', post_data, this.httpOptions).subscribe(
			(data) => {
				if (data && data['access_token']) {
					return this.storage.set(TOKEN_KEY, data['access_token']).then(() => {
						this.storage.set('email', username);
						this.storage.set('password', password);
						localStorage.setItem('token', data['access_token']); //nie dało się inaczej wkleić tokena do headera w requestach :P
            this.authenticationState.next(true);
            this.router.navigate(['/home1'], {replaceUrl: true});
					});
				}
			},
			err => {
				this.presentAlert('Błąd', 'Adres email, lub hasło jest niepoprawne.');
			});
  }
  
  async presentAlert(header, message) {
		const alert = await this.alertCtrl.create({
		  header: header,
		  subHeader: message,
		  buttons: ['OK']
		});
	
		await alert.present();
  }
  
  isAuthenticated() {
		return this.authenticationState.value;
	}
}
