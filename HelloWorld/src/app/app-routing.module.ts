import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'components', loadChildren: './components/components.module#ComponentsPageModule' },
  { path: 'introduction', loadChildren: './introduction/introduction.module#IntroductionPageModule' },
  { path: 'installation', loadChildren: './installation/installation.module#InstallationPageModule' },
  { path: 'cli', loadChildren: './cli/cli.module#CLIPageModule' },
  { path: 'native-apis', loadChildren: './native-apis/native-apis.module#NativeAPIsPageModule' },
  { path: 'theming', loadChildren: './theming/theming.module#ThemingPageModule' },
  { path: 'resources', loadChildren: './resources/resources.module#ResourcesPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'action-sheet', loadChildren: './IonicComponents/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './IonicComponents/alert/alert.module#AlertPageModule' },
  { path: 'badge', loadChildren: './IonicComponents/badge/badge.module#BadgePageModule' },
  { path: 'button', loadChildren: './IonicComponents/button/button.module#ButtonPageModule' },
  { path: 'card', loadChildren: './IonicComponents/card/card.module#CardPageModule' },
  { path: 'checkbox', loadChildren: './IonicComponents/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'chip', loadChildren: './IonicComponents/chip/chip.module#ChipPageModule' },
  { path: 'content', loadChildren: './IonicComponents/content/content.module#ContentPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
