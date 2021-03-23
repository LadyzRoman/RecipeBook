import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'images';

  constructor(private http: HttpClient) { }

  getImage(imageId: number): Observable<Blob> {
    const url = `${environment.apiUrl}/${this.baseUrl}/${imageId}`;
    return this.http
      .get(url, { responseType: 'blob' });
  }
}
