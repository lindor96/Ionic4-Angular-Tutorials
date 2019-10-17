import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  selectedPath = '';

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  pages = [
    {
      title: 'home',
      url: ''
    },
    {
      title: 'Components',
      url: 'components'
    },
    {
      title: 'Introduction',
      url: 'introduction'
    },
    {
      title: 'Installation',
      url: 'installation'
    },
    {
      title: 'CLI',
      url: 'cli'
    },
    {
      title: 'Native APIs',
      url: 'native-apis'
    },
    {
      title: 'Theming',
      url: 'theming'
    },
    {
      title: 'Resources',
      url: 'resources'
    },
    {
      title: 'FAQ',
      url: 'faq'
    },
  ];
}
