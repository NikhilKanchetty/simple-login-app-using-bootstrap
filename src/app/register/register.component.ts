import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  firstName: string = '';
  firstNameErr: string ="";
  lastName: string = '';
  lastNameErr: string = '';
  emailId: string ='';
  emailIdErr: string ='';
  password: string = '';
  passwordErr: string = '';
  confirmPassword: string = '';
  confirmPasswordErr: string = '';

  regValidation() {
    if(this.firstName == "") {
      this.firstNameErr = "This is a required feild";
    } else {
      this.firstNameErr ="";
    }
    if(this.lastName == "") {
      this.lastNameErr = "This is a required feild";
    } else {
      this.lastNameErr ="";
    }
    if(this.emailId == "") {
      this.emailIdErr = "This is a required feild";
    } else {
      this.emailIdErr ="";
    }
    if(this.password == "") {
      this.passwordErr = "This is a required feild";
    } else {
      this.passwordErr ="";
    }
    if(this.confirmPassword == "") {
      this.confirmPasswordErr = "This is a required feild";
    } else {
      this.confirmPasswordErr ="";
    }
  }




}
