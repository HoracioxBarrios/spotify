import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  MockDataTracks = [
    {
      name : 'Bebe (Oficial)'
    },
        {
      name : 'Maná (Oficial)'
    },
        {
      name : 'Alan Walker (Oficial)'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
