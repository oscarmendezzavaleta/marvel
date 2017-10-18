import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpleosPage } from './empleos';

@NgModule({
  declarations: [
    EmpleosPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpleosPage),
  ],
})
export class EmpleosPageModule {}
