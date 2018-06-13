import {Component, ViewChild} from "@angular/core";
import {IonicPage,NavController, AlertController, ToastController, MenuController, NavParams} from "ionic-angular";
import {HomePage} from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import {RegisterPage} from "../register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,public navParams: NavParams, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, private firebase: AngularFireAuth) {
    this.menu.swipeEnable(false);
  }

  alertFunction(message:string){
    this.forgotCtrl.create({
      title: 'Login',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  // go to register page
  register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.firebase.auth.signInWithEmailAndPassword(this.username.value,this.password.value).then(data=>{
      console.log("Usuário Logou!", data);
      this.alertFunction("Você conseguiu se logar");
      this.navCtrl.setRoot(HomePage);
    }).catch(error=>{
      console.log("Ocorreu um erro", error.message);
      this.alertFunction(error.message);
    })
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
