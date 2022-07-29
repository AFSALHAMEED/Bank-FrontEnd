import { Injectable } from '@angular/core';
import { never } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

// login username

currentuser:any

// login account number

currentAcno:any

  userDetails:any = {
    1000: {acno: 1000, username: 'neer', password: 1000,phoneNumber:100,gmail:'neer@gmail.com', balance: 3000,transaction:[]},
    1001: { acno: 1001, username: 'laisha', password: 1001,phoneNumber:101,gmail:'laisha@gmail.com', balance: 2000,transaction:[] },
    1002: { acno: 1002, username: 'Vyon', password: 1002,phoneNumber:102,gmail:'vyon@gmail.com', balance: 4000,transaction:[] }
  }

  constructor() { }

  // register
  register(acno:any,username:any,password:any,phonenumber:any,gmail:any){

    let userDetails =this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={ 
        acno,
        username,
        password,
        balance:0,
        phonenumber,
        gmail,
        transaction:[]

      }
      console.log(userDetails);
      
      return true

    }
    
  }
  // login
  login(acno:any,pswd:any){

    
    let userDetails=this.userDetails
    if(acno in userDetails){
     if(pswd==userDetails[acno].password){
      this.currentuser=userDetails[acno].username
      this.currentAcno=acno
     return true
     }
     else{
      alert("incorrect password")
      return false
     }
    }
    else{
      alert("user doesnot exist")
      return false
    }
   // alert("login clicked")
  }

  // deposit 
  deposit(acno:any,pswd:any,amt:any){
    let userDetails= this.userDetails
    var amount =parseInt(amt)

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount
        userDetails[acno]["transaction"].push({
          type:'Credit',
          amount
        })
 console.log(userDetails);
 
        return userDetails[acno]["balance"]
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('user doesnot exist')
      return false
    }
    }

    // register
    
  withdrawal(acno:any,pswd:any,amt:any){
      let userDetails= this.userDetails
      var amount =parseInt(amt)
  
      if(acno in userDetails){
        if(pswd==userDetails[acno]["password"]){

          if(userDetails[acno]["balance"]>amount){
            userDetails[acno]['balance']-=amount
            userDetails[acno]["transaction"].push({
              type:'debit',
              amount
            })
            console.log(userDetails)
            
            return userDetails[acno]["balance"]
          }
          else{
            alert('insuffecient balance')
          }
          
        }
        else{
          alert('incorrect password')
          return false
        }
      }
      else{
        alert('user doesnot exist')
        return false
      }
      }
// transction

getTransaction(acno:any){
  return this.userDetails[acno]["transaction"]
}

  }

