import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor (private authService: AuthService, private router: Router) {}

  loginForm!: FormGroup

  submitLogin () {
    // console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: err => alert(err.message)
    })
  }

  ngOnInit (): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ])
    })

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin'])
    }
  }
}
