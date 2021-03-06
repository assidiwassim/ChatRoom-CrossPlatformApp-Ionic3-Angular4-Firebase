import { Component , ViewChild } from '@angular/core';
import { NavController , AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  @ViewChild('Username') Username;
  @ViewChild('Password') Password;


  constructor(public afAuth: AngularFireAuth ,public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  Signup(){
  
    this.afAuth.auth.createUserWithEmailAndPassword(this.Username.value,this.Password.value)
    .then(data => {
      let alert = this.alertCtrl.create({
        title: 'ok',
        subTitle: 'You are logged in',
        buttons: ['OK']
      });
      alert.present();
    })
    .catch(error => {
      let alert = this.alertCtrl.create({
        title: 'Login failed',
        subTitle: 'error !',
        buttons: ['OK']
      });
      alert.present();
    })

    }

}
