import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  // login model

  loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
 
  pswd:['',[Validators.required,Validators.pattern('[0-9]*')]]

})

constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { } // to instantiate object

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

    var acno=this.loginForm.value.acno    
    var pswd = this.loginForm.value.pswd

    if(this.loginForm.valid){
// login data service -asychronous
       this.ds.login(acno,pswd)

      .subscribe(
        (result:any)=>{
          // store all login user details in local storage
          localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
          localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
          localStorage.setItem('token',JSON.stringify(result.token))

          alert(result.message)
          this.router.navigateByUrl('dashboard')
        },
        result=>{
          alert(result.error.message)
        })
  
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