import {Album} from "./models";

export const ALBUMBS: Album[] = [];
export let numOfAlbums = 100;
export function incrementNumOfAlbums() {
  numOfAlbums += 1;
}

