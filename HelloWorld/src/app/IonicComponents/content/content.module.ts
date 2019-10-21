import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, IonContent } from '@ionic/angular';

import { ContentPage } from './content.page';

const routes: Routes = [
  {
    path: '',
    component: ContentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContentPage]
})
export class ContentPageModule {
  @ViewChild(IonContent, { static: true }) content: IonContent;

scrollToBottom(){
  setTimeout(() => {
      if (this.content.scrollToBottom) {
        setTimeout(()=>{this.content.scrollToBottom(400);},200);
         // this.content.scrollToBottom(400);
      }
  }, 500);
}

scrollToTop(){
  setTimeout(()=>{this.content.scrollToTop(400);},200);
}
}
