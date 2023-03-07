import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMBS} from "../fake-db";
import {Album} from "../models";
import {AlbumsComponent} from "../albums/albums.component";
import {AlbumService} from "../album.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  title: string;
  edittedAlbum: Album;
  editing: boolean;
  constructor(private route: ActivatedRoute,

              private router: Router,
              private  albumService: AlbumService) {
    this.album = {} as Album;
    this.loaded = true;
    this.title = "";
    this.edittedAlbum = {} as Album;
    this.editing = false;
  }

  ngOnInit(): void{
    this.getAlbum();
  }
  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      const title = params.getAll('title')
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      })
    })
  }
  goPhotos(){
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  saveEdit() {
    for(let i of ALBUMBS) {
      if(i.id === this.album.id) {
        i.title = this.edittedAlbum.title;
      }
    }
    this.album.title = this.edittedAlbum.title;
    this.edittedAlbum = {} as Album;
    this.editing = false;
  }

}
