import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/2a497d32-194c-43b0-ba36-7fc40e34249e';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //Retorna a lista de usuários READ
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  // Salva usuario no banco
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
  }

  // Deletar usuário do banco
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
  }

  // Edita usuario
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
  }

  // LISTA USUARIO UNICO
  getUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`);
  }
}
