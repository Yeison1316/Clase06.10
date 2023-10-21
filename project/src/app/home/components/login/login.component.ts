import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder ,private ser : AuthService){}

  form = this.fb.group({
    email : [''],
    password :['']
  })
obtener(){
  this.ser.getusuario().subscribe((res) => {
    console.log(res);
  })
}
submit(){
  console.log(this.form.value);
  this.ser.getToken(this.form.value).subscribe((res : any) :void =>{
    console.log(res);
    localStorage.setItem('token_auth',res.access_token);
  },
  (err)=>{
    console.log(err)
  })
}

}
