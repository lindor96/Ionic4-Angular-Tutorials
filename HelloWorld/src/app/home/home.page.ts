import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from 'src/app/IonicComponents/popover/popover.page';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../IonicComponents/modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private popoverController: PopoverController, public modalController: ModalController) { }

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

  async presentPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      animated: true,
      translucent: true,
      backdropDismiss: true,
      showBackdrop: true,
      event: ev
    });
    return await popover.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      animated: true,
      backdropDismiss: true,
      showBackdrop: true
    });
    return await modal.present();
  }
}
