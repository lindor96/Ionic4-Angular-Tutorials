import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent } from '@Ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild(IonContent, {read: IonContent, static: false}) content: IonContent; 

  
  scrollToBottom(){
    this.content.scrollToBottom();
    console.log('clicked');
  }

  logScrollEnd(){
    this.content.ionScrollEnd;
  }
  constructor(){
  }
  ngOnInit() {
  }

}
