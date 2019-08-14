import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  getByUsername(username: string): Observable<User[]> {
    const params = new HttpParams().append('username', username);

    return this.http.get<User[]>(`${environment.apiUrl}/users`, {params});
  }

  saveUser(user: User): Observable<any> {
    return this.http.post<void>(`${environment.apiUrl}/users`, user);
  }

  putUser(user: User): Observable<any> {
    return this.http.put<void>(`${environment.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<void>(`${environment.apiUrl}/users/${id}`);
  }
}
