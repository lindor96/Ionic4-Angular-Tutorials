import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NativeAPIsPage } from './native-apis.page';

const routes: Routes = [
  {
    path: '',
    component: NativeAPIsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NativeAPIsPage]
})
export class NativeAPIsPageModule {}
