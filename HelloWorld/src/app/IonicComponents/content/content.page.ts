import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent } from '@Ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild(IonContent, {read: IonContent, static: false}) content: IonContent; 

  constructor(){}

  onPageScroll(event) {
    console.log(event.target.scrollTop);
}

  scrollToBottom(event){
    this.content.scrollToBottom();
    console.log(event.target.scrollToBottom);
  }

  logScrollEnd(event){
    this.content.ionScrollEnd;
    console.log(event.target.ionScrollEnd);

  }
  ngOnInit() {
  }

}
