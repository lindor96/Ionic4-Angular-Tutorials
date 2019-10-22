import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-progress-indicators',
  templateUrl: './progress-indicators.page.html',
  styleUrls: ['./progress-indicators.page.scss'],
})
export class ProgressIndicatorsPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      animated: true,
      spinner: "lines-small",
      duration: 2000,
      message: 'Please wait..',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  ngOnInit() {
  }

}
