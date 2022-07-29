import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
 


 acno=""
 pswd=""

constructor(private router:Router,private ds:DataService) { } // to instantiate object

ngOnInit(): void {  //realated to angular, life cycle hook of angular
}

  // user defined function

  // acno change
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(event.target.value);
    
   
  }

   // pswd change
   pswdChange(event:any){
    this.pswd=event.target.value
   console.log(event.target.value);
   
  }

// login
  login(){

    var acno=this.acno    
    var pswd = this.pswd
   const result = this.ds.login(acno,pswd)

   if(result){

    alert("login succesfully")
    this.router.navigateByUrl("dashboard") 

   }
   
  }
//}
 // two way templating with 2 arg
// login(a:any,p:any){
//  console.log(a.value);
//  console.log(p.value);
 
 
//   var acno = a.value
//   var pswd = p.value

//   let userDetails=this.userDetails
//   if(acno in userDetails){
//    if(pswd==userDetails[acno]["password"]){
//     alert("login succesfully")
//    }
//    else{
//     alert("incorrect password")
//    }
//   }
//   else{
//     alert("user doesnot exist")
//   }
//   alert("login clicked")
// }
// }
}