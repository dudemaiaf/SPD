import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundosPage } from './fundos';

@NgModule({
  declarations: [
    FundosPage,
  ],
  imports: [
    IonicPageModule.forChild(FundosPage),
  ],
})
export class FundosPageModule {}
