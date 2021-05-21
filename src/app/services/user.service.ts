import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersURL = 'http://localhost:8080/api/v1/user?';
  constructor( private httpClient: HttpClient) { }

  public usuarios(page: number, size: number, field: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(this.usersURL + `page=${page}&size=${size}
    &filed=${field}&asc=${asc}`);
  }
}
