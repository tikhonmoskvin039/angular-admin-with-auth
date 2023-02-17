import { AdminService } from './../../services/admin.service'
import { IUser } from './../../user'
import { Component, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  constructor (
    private activateRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  user!: Observable<IUser>
  id!: number

  ngOnInit (): void {
    // this.activateRoute.params.subscribe(params => (this.id = params?.['id']))
    // this.user = this.adminService.getPerson(this.id)
    this.user = this.activateRoute.data.pipe(map(data => data?.['user']))
  }
}
