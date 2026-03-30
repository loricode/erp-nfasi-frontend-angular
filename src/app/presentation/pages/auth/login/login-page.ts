import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthFacade } from '../../../facades/auth.facade';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
 
  private fb = inject(FormBuilder);
  private authFacade = inject(AuthFacade);

  public loginForm = this.fb.group({
    email: ['ajcampillo07@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  public onSubmit = () => {
    const { email, password } = this.loginForm.value;

    if(!email || !password){
      return;
    }

    this.authFacade.login(email, password);

  }

}
