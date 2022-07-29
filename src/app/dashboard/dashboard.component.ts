import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""
  accountnumber1=""
  pswd1=""
  amount1=""
  // login username
  user=""

  constructor(private ds:DataService) {
    this.user=this.ds.currentuser
   }

  ngOnInit(): void {
  }

  deposit(){

    var acno=this.acno
    var pswd = this.pswd
    var amount = this.amount
    const result = this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(`${amount} is credited,new balance ${result}`)
    }
  }

  withdrawal(){

    var acno= this.accountnumber1
    var pswd = this.pswd1
    var amount= this.amount1
    const result = this.ds.withdrawal(acno,pswd,amount)
    if(result){
      alert(`${amount} is debited,new balance ${result}`)
    }  }

}
