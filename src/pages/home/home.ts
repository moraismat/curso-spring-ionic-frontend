import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }
  
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService ) {

  } 

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
<<<<<<< HEAD
      .subscribe(res => {
        this.auth.successfulLogin(res.headers.get('Authorization')),
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
=======
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});  
>>>>>>> b3a53fc14b9e253e647593ef2745e5aabe43fe31
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(res => {
        this.auth.successfulLogin(res.headers.get('Authorization')),
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

<<<<<<< HEAD
  signup() {
    this.navCtrl.push('SignupPage')
  }
=======

>>>>>>> b3a53fc14b9e253e647593ef2745e5aabe43fe31

}
