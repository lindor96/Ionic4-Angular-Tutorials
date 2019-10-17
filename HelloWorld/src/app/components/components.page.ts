import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {

  constructor(private router: Router) { }

  Action_Sheet() {
    this.router.navigate(['action-sheet']);
  }

  Alert() {
    this.router.navigate(['alert']);
  }

  Badge() {
    this.router.navigate(['badge']);
  }

  Button() {
    this.router.navigate(['button']);
  }

  Card() {
    this.router.navigate(['card']);
  }

  Checkbox() {
    this.router.navigate(['checkbox']);
  }

  Chip() {
    this.router.navigate(['chip']);
  }

  Content() {
    this.router.navigate(['content']);
  }

  DateTime() {
    this.router.navigate(['date-time']);
  }

  FloatingActionButton() {
    this.router.navigate(['floating-action-button']);
  }

  Grid() {
    this.router.navigate(['grid']);
  }

  Infinite_Scroll() {
    this.router.navigate(['infinite-scroll']);
  }

  Input() {
    this.router.navigate(['input']);
  }

  Item() {
    this.router.navigate(['item']);
  }

  List() {
    this.router.navigate(['list']);
  }

  Menu() {
    this.router.navigate(['menu']);
  }
  ngOnInit() {
  }

}
