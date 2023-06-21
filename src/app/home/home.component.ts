import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  images: string[] = [
    '../../assets/newpics/20161129-BFD_5361.jpg',
    '../../assets/newpics/CRW_8110.jpg',
    '../../assets/newpics/DSC_5002.jpg',
    '../../assets/newpics/DSC_6444.jpg',
    '../../assets/newpics/Emperors-Palace-Codesa-Walk.jpg',
    '../../assets/newpics/Emperors-Palace-Entertainment-Emporium.jpg',
    '../../assets/newpics/EP-New-Exterior-Twilight.jpg',
    '../../assets/newpics/Glendower 14th hole.jpg',
    '../../assets/newpics/IMG_2313.jpg',
    '../../assets/newpics/JAC_2069.jpg',
    '../../assets/newpics/JAC_2088.jpg'
  ];

  currentIndex: number = 0;

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  ngOnInit() {
    setInterval(() => this.showNextImage(), 5000);
  }
}
