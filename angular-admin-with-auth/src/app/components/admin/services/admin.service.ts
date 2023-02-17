import { IUser } from './../user'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor (private http: HttpClient) {}

  getPersonalList () {
    return this.http.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users?_limit=3'
    )
  }

  getPerson (id: number) {
    return this.http.get<IUser>(
      'https://jsonplaceholder.typicode.com/users' + '/' + id
    )
  }
}
