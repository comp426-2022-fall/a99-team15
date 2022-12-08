import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  accountForm = this.formBuilder.group({
    username: '',
    password: '',
    email: ''
  })

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  async create() {

    const res = await axios.post('http://localhost:5000/create_account', JSON.stringify(this.accountForm.value), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },

    },);
    if (res.status == 200) {
      console.log('it works!');

    }
  }
}
