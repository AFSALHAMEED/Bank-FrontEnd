import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // login username
  user=""
// deposit model

depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

withdrawalForm=this.fb.group({
  accountnumber1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  // share to child
  acno:any
// to store date
  sDetails:any
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) {
  if(localStorage.getItem('currentuser')){
    this.user=JSON.parse(localStorage.getItem('currentuser') || '')

  }
    this.sDetails= new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert('please log in')
      this.router.navigateByUrl('')
    }
  }

  deposit(){

    var acno=this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid){
      // caliing deposit in data service-asychronous
       this.ds.deposit(acno,pswd,amount)
       .subscribe(
        (result:any)=>{
          alert(result.message)
        },
        (result)=>{
          alert(result.error.message)
        })
     
    }
    else{
      alert('invalid form')
    }
    
    
  }

  withdrawal(){

    var acno= this.withdrawalForm.value.accountnumber1
    var pswd = this.withdrawalForm.value.pswd1
    var amount= this.withdrawalForm.value.amount1

    if(this.withdrawalForm.valid){
       this.ds.withdrawal(acno,pswd,amount)
      // caliing withdrawal in data service-asychronous
       this.ds.withdrawal(acno,pswd,amount)
      .subscribe(
        // response code:2xx
       (result:any)=>{
         alert(result.message)
       },
       (result)=>{
         alert(result.error.message)
       })
    }
    
    else{
      alert('invalid form')
    }
   }

// log out

logOut(){
  // remove login acno and username
  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentuser')
  localStorage.removeItem('token')

  // navigate to login page
  this.router.navigateByUrl('')
  }

  // delete parent

  deleteParent(){
    this.acno=JSON.parse(localStorage.getItem('currentAcno')|| '')
  }
  onCancel(){
    this.acno=""
  }

  onDelete(event:any){
this.ds.onDelete(event)
.subscribe(
  (result:any)=>{
    alert(result.message)
    this.logOut()
    this.router.navigateByUrl('')
  },
  result=>{
    alert(result.error.message)
  }

)
  }
}
