import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  // to hold acno of current user

  acno:any

  // to hold transaction arra of current user
  transactions:any
  constructor(private ds:DataService) {
    // get the values of current acno from localstorage
    this.acno=JSON.parse(localStorage.getItem('currentAcno') || '')
    // get transaction array from data service -asychronous
    this.ds.getTransaction(this.acno)
    .subscribe(
      // 2xx
      (result:any)=>{
        this.transactions=result.transaction
      },
      //4xx
      result=>{
        alert(result.error.message)
      }
    )
    
   }

  ngOnInit(): void {
  }

}
