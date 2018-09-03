import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../model/user.model";

@Injectable()
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true'
    }),
    token: 'token'
  };
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8081/v1/users';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl, this.httpOptions);
  }

  getUserById(id: string) {
    return this.http.get<User>(this.baseUrl + '/' + id, this.httpOptions);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user, this.httpOptions);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user, this.httpOptions);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id, this.httpOptions);
  }
}