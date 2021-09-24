import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {GalleryConfig} from "./image-gallery/token";
import {ImgSliderModule} from "./img-slider/img-slider.module";
import {sliderConfig} from "./img-slider/sliderTOken";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule,
    ImgSliderModule
  ],
  providers: [{
    provide: GalleryConfig, useValue: 3
  },{
    provide: sliderConfig, useValue: 4
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
