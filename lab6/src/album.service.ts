import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Album} from "./models";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {ALBUMBS} from "./fake-db";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  newAlbum: Album;
  albums: Album[];

  constructor(private client: HttpClient) {
    this.newAlbum = {} as Album;
    this.albums = [];
  }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
  }

  // getAlbum(id: number): Observable<Album>{
  //   if (id<=100) {
  //     return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  //   }else{
  //     return of({
  //       id: id,
  //       title: document.getElementById("title").value;
  //     })
  //   }
  //   // return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  // }
  // @ts-ignore
  getAlbum(id: number): Observable<Album>{
    if (id <= 100) {
      return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
    } else {
      const al = ALBUMBS.find(p => p.id === id)
      if(al){
        return of(al)
      }
    }
  }
  addAlbum(album: Album): Observable<Album>{
    return this.client.post<Album>("https://jsonplaceholder.typicode.com/albums", album);
  }

  delete(album: Album): Observable<void> {
    return this.client.delete<void>(`https://jsonplaceholder.typicode.com/posts/${album.id}`);
  }

}
