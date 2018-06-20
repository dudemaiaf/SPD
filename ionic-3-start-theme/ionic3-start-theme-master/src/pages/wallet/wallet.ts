import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FundosPage} from "../fundos/fundos";

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  public valor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valor = this.navParams.get('valor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  addFundos(){
    this.navCtrl.push(FundosPage, {valor: this.valor});
  }

  comeBack(){
    this.navCtrl.popToRoot();
  }

}
