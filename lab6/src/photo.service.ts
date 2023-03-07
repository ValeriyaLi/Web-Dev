import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private client: HttpClient) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.client.get<Photo[]>('https://jsonplaceholder.typicode.com/albums/1/photos');
  }

  getPhoto(id: number, title: string): Observable<Photo> {
    return this.client.get<Photo>(`https://jsonplaceholder.typicode.com/albums/1/photos/${id}`);
  }
}
