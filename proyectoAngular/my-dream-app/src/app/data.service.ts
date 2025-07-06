import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {
    console.log('Service working...');
  }

  getData(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
