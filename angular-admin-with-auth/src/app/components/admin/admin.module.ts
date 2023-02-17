import { AdminRoutes } from './admin.routing';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component'
import { ContactsComponent } from './components/contacts/contacts.component'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'

@NgModule({
  imports: [CommonModule, AdminRoutes],
  declarations: [
    AdminDashboardComponent,
    ContactsComponent,
    ContactsDetailsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ]
})
export class AdminModule {}
