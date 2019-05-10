import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";
  userNameErr: string ="";
  passErr:string="";

  validation() {
    console.log(this.email, this.password);
    if(this.email == ""){
      this.userNameErr = "This feid is required";
    } else {
      this.userNameErr="";
    }
    if(this.password == ""){
      this.passErr = "This feild cannot be empty"
    } else {
      this.passErr =""
    }
  }
}
