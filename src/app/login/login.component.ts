import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // property / variable

  // string interpolation
   aim="your perfect banking partner"

   //property binding
   account="enter the account number"
  // data base

  userDetails:any = {
    1000: {acno: 1000, username: 'neer', password: 1000, balance: 3000},
    1002: { acno: 1001, username: 'laisha', password: 1001, balance: 2000 },
    1003: { acno: 1002, username: 'Vyon', password: 1002, balance: 4000 }
  }


 acno=" "
 pswd=" "

constructor() { } // to instantiate object

ngOnInit(): void {  //realated to angular, life cycle hook of angular
}

  // user defined function

  // acno change
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(event.target.value);
    
   
  }

   // acno change
   pswdChange(event:any){
    this.pswd=event.target.value
   console.log(event.target.value);
   
  }

// login
  login(){

    var acno=this.acno
    var pswd = this.pswd

    let userDetails=this.userDetails
    if(acno in userDetails){
     if(pswd==userDetails[acno].password){
      alert("login succesfully")
     }
     else{
      alert("incorrect password")
     }
    }
    else{
      alert("user doesnot exist")
    }
    alert("login clicked")
  }
}
