import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import * as dataRaw from "../../../../../assets/mocks-json/tracks.json"
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  // MockDataTracks = [
  //   {
  //     name : 'Bebe (Oficial)'
  //   },
  //       {
  //     name : 'Maná (Oficial)'
  //   },
  //       {
  //     name : 'Alan Walker (Oficial)'
  //   }
  // ]

  MockDataTracks : Array<TracksModel> = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(dataRaw)

    // const data: any = (dataRaw as any).default;   // como aca es un obj con el array dentro, vamos a desestructurar la data ,ver abajo
    const {data }: any = (dataRaw as any).default; //obtenemos la data de la datacruda del json
    console.log(data);
    this.MockDataTracks = data; 
  }

}
