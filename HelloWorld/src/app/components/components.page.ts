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
      message: 'Demonstrated in the home page',
      buttons: ['OK']
    });

    await alert.present();
  }

  Modal() {
    this.router.navigate(['modal']);
  }
  Popover() {
    this.router.navigate(['popover']);
  }

  Tabs() {
    this.router.navigate(['tabs']);
  }

  Toast() {
    this.router.navigate(['toast']);
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
