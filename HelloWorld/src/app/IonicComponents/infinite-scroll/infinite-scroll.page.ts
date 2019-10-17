import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  items = []
  numTimesLeft = 5;

  constructor() {
    this.addMoreItems();
  }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 800);
  }

  addMoreItems() {
    for (let i = 0; i < 10; i++)
      this.items.push(i);
  }
}
