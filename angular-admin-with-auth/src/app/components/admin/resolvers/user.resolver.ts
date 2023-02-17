import { IUser } from './../user'
import { AdminService } from './../services/admin.service'
import { Injectable } from '@angular/core'
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router'
import { Observable, delay, catchError, EMPTY } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
  constructor (private adminService: AdminService, private router: Router) {}
  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUser> {
    return this.adminService.getPerson(route.params?.['id']).pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}
