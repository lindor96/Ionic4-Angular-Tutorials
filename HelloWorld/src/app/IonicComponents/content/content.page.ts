import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent } from '@Ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild(IonContent, {static: false, read: Component}) content: any; 

  constructor(){}

  async scrollToTop(){
    await this.content.scrollToTop();
  }
  ngOnInit() {
  }

}
