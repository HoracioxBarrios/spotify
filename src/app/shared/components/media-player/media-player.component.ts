import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover : any = {
    cover: 'https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg',
    name: 'guili and assia',
    album: 'BEBE (Oficial)'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
