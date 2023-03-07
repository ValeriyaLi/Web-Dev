import { Component, OnInit } from '@angular/core';
import {Album} from "../models";
import {ALBUMBS, incrementNumOfAlbums, numOfAlbums} from "../fake-db";
import {AlbumService} from "../album.service";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;
  album: Album;
  constructor(private albumService: AlbumService,private router: Router) {
    this.albums = []
    this.loaded = true;
    this.newAlbum = {} as Album;
    this.album = {} as Album;
  }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(){
    // this.loaded = false;
    if(ALBUMBS.length != 0) {
      this.albums = ALBUMBS;
    } else {
      this.albumService.getAlbums().subscribe((albums) => {
        this.albums = albums;
        for(let i of albums) {
          ALBUMBS.push(i);
        }
      });
      // this.album = this.albumService.getAlbum()
      // ALBUMBS.unshift(this.album);
    }
  }

  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      album.id = numOfAlbums + 1;
      incrementNumOfAlbums();
      this.albums.unshift(album);
      // ALBUMBS.unshift(album);
      this.newAlbum = {} as Album;
    });
  }
  delete(album: Album) {
    this.albumService.delete(album);
    const ind = ALBUMBS.findIndex(a => a.id === album.id);
    this.albums.splice(ind, 1);
  }

}
