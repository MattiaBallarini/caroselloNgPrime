import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaroselloComponent } from './carosello/carosello.component';
import { DownloadUtentiService } from './services/download-utenti.service';
import { HttpClientModule } from '@angular/common/http';

//primeng
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CaroselloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [
    DownloadUtentiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
