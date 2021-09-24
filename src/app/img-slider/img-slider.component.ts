import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from "../image-gallery/token";
import {sliderConfig} from "./sliderTOken";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  itemWidth!: number;
  config = 4;
  number = 0;
  constructor(
    @Inject(sliderConfig)
    @Optional()
      config: number) {
    if(config){
      this.config = config;
    }
  }

  ngOnInit(): void {
  }
  next(){
    this.number++
    if(this.number == this.listImage.length){
      this.number = 0;
    }
  }
  back(){
    this.number--
    if(this.number <0){
      this.number = this.listImage.length-1
    }
  }
}
