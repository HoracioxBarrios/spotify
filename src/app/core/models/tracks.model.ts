import { Artist } from "./artist.model";
import { Duration } from "./duration.model";

export interface TracksModel{
    id: number | string,
    name: string,
    album: string,
    cover: string,
    artist?: Artist,
    duration?: Duration,
    url: string
}


