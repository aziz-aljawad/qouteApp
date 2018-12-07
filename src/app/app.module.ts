import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { QoutesPage } from '../pages/qoutes/qoutes';
import { LibraryPage } from '../pages/library/library';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/Tabs/tabs';
import { QuotesService } from '../services/quotes';
import { QuotePage } from '../pages/quote/quote';
import { SettingsService } from '../services/settings';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    QoutesPage,
    QuotePage,
    LibraryPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    QoutesPage,
    QuotePage,
    LibraryPage,
    SettingsPage,
    TabsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
