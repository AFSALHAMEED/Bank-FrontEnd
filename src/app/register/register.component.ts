import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    uname:[""],
  accountnumber:[''],
  phonenumber:[''],
  gmail:[''],
  pswd:['']

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

 const result= this.ds.register(acno,uname,pswd,phonenumber,gmail)
 if(result){

  alert('successfully registered')
  this.router.navigateByUrl('')
 }

 else{
  alert('user already exist..please login')
  this.router.navigateByUrl('')

 }

}
}
