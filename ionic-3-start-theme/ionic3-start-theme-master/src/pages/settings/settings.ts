import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { AngularFireAuth } from "angularfire2/auth";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public nav: NavController, private firebase: AngularFireAuth) {
  }

  // logout
  logout() {
    return this.firebase.auth.signOut();
  }
}
