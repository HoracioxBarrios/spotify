import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
@Input() mode :"small" | "big" = "small";
@Input() track!: TracksModel;

//Otra forma opcional es esta, inicializando algo asi: 
// @Input() track : TracksModel = {
//   id: 0,
//   name: "",
//   album: "",
//   cover: "",
//   artist: {name: "", nickName: "", nacionality: ""},
//   duration: {start: 0, end: 0},
//   url: ""
// };

  constructor() { }

  ngOnInit(): void {
  }

}
