import { Component , OnInit} from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../photo.service";


@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[];
  loaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,

  ) {
    this.photos = [];
    this.loaded = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.getPhotos(id);
    });
  }

  getPhotos(id: number) {
    this.loaded = false;
    this.photoService.getPhotos().subscribe((photos: Photo[]) => {
      this.photos = photos.filter((photo) => photo.id === id);
      this.loaded = true;
    });
  }

  goBack() {
    this.router.navigate(['albums/:id']);
  }

}
