import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsPage } from '../components/components.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  Ionic_Components() {
    this.router.navigate(['components']);
  }

  Introduction() {
    this.router.navigate(['introduction']);
  }

  Installation() {
    this.router.navigate(['installation']);
  }

  CLI() {
    this.router.navigate(['cli']);
  }

  Native_APIs() {
    this.router.navigate(['native-apis']);
  }

  Theming() {
    this.router.navigate(['theming']);
  }

  Resources() {
    this.router.navigate(['resources']);
  }

  FAQ() {
    this.router.navigate(['faq']);
  }

}
