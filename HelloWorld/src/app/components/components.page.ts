import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../../app/IonicComponents/modal/modal.page'

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController, private alertController: AlertController) { }

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

  async Menu() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Menu',
      message: 'Demonstrated on home page',
      buttons: ['OK']
    });

    await alert.present();
  }

  Modal() {
    this.router.navigate(['modal']);
  }

  async Navigation() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Navigation',
      message: 'Demonstrated thoughout the application',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Popover() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Popover',
      message: 'Demonstrated on home page',
      buttons: ['OK']
    });

    await alert.present();
  }

  Progress_Indicators() {
    this.router.navigate(['progress-indicators']);
  }

  Radio() {
    this.router.navigate(['radio']);
  }

  Refresher() {
    this.router.navigate(['refresher']);
  }

  Reorder() {
    this.router.navigate(['reorder']);
  }

  async Routing() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Routing',
      message: 'This component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use ion-router-outlet and the Angular router.',
      buttons: ['OK']
    });

    await alert.present();
  }

  Searchbar() {
    this.router.navigate(['searchbar']);
  }

  Segment() {
    this.router.navigate(['segment']);
  }

  Tabs() {
    this.router.navigate(['tabs']);
  }

  Toast() {
    this.router.navigate(['toast']);
  }

  Toggle() {
    this.router.navigate(['toggle']);
  }

  Toolbar() {
    this.router.navigate(['toolbar'])
  }

  Slides() {
    this.router.navigate(['slides']);
  }

  Select() {
    this.router.navigate(['select']);
  }
  ngOnInit() {
  }

}
