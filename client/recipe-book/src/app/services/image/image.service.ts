import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImage(imageId: string): Observable<Blob> {
    const url = `${environment.apiUrl}/${environment.imagesEndpoint}/${imageId}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  uploadImage(image: File): Observable<any> {
    const formData: any = new FormData();
    formData.append('image', image);
    return this.http.post(`${environment.apiUrl}/${environment.imagesEndpoint}`, formData);
  }
}
