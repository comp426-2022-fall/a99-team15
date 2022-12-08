import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  async login() {

    const res = await axios.post('http://localhost:5000/login', JSON.stringify(this.loginForm.value), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },

    },);

    if (res.status == 200) {
      console.log('it works!');
      this.router.navigateByUrl('/home-page');
    }
  }
}
