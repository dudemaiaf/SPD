import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the CompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {

  public valor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valor = this.navParams.get('valor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraPage');
  }

  rockHardOrGoHome(){
    this.navCtrl.setRoot(HomePage, {valor: this.valor});
  }

}
