import { Injectable } from '@angular/core'
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router'
import { delay, Observable } from 'rxjs'
import { IUser } from '../user'
import { AdminService } from '../services/admin.service'

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {
  constructor (private adminService: AdminService) {}
  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUser[]> {
    return this.adminService.getPersonalList().pipe(delay(2000))
  }
}
