import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  username;
  password;

  constructor(
    private router: Router,
    public toastController: ToastController,
    private storage: Storage,
    private auth: AuthService
    ) { }

  ngOnInit() {

  }

  formRegister() {
    this.router.navigate(['/register']);
  }

  loginClick() {
		this.auth.login(this.username, this.password);
  }
}
// loginWithFacebook() {
//    console.log(this.onFacebook.value.check);
//   if(this.onFacebook.value.check === true){
//     this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
//       this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
//         this.auth.registerFacebook(profile['name'], profile['email'], profile['id']).subscribe(
//           (data) => {
//             if (data === 0) {
//               this.auth.login(profile['email'], profile['id']);
//             }
//             if (data === -1) {
//               this.auth.login(profile['email'], profile['id']);
//             }
//         });
//       });
//     });
//   } else {
//     this.presentAlert('Błąd', 'Musisz zaakceptować regulamin, oraz politykę prywatności!');
//   }
// }