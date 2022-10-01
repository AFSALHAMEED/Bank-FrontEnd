import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname=""
  // accountnumber=''
  // phonenumber=""
  // gmail=""
  // pswd=""

  // register model

  registerForm=this.fb.group({
    uname:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  accountnumber:['',[Validators.required,Validators.pattern('[0-9]+')]],
  phonenumber:['',[Validators.required,Validators.pattern('[0-9]*')]],
  gmail:['',[Validators.required,Validators.pattern('[a-z0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})
  
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
  var uname=this.registerForm.value.uname
  var acno = this.registerForm.value.accountnumber
  var phonenumber=this.registerForm.value.phonenumber
  var gmail=this.registerForm.value.gmail
  var pswd=this.registerForm.value.pswd
if(this.registerForm.valid){

  // register -data service - asychronous
   this.ds.register(acno,uname,pswd,phonenumber,gmail)
   .subscribe(
    (result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('')
    },
    result=>{
      alert(result.error.message)
      this.router.navigateByUrl('')
    })
  }

 else{
  alert('Invalid Form')
 }

}
}
