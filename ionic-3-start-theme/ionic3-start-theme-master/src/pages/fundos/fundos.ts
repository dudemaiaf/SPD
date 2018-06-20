import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompraPage} from "../compra/compra";

/**
 * Generated class for the FundosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fundos',
  templateUrl: 'fundos.html',
})
export class FundosPage {

  private valor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valor = this.navParams.get('valor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundosPage');
  }

  goToShop(valor){
    this.navCtrl.push(CompraPage,  {valor: this.valor + valor});
  }

}
