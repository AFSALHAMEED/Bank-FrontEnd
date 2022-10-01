import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { never } from 'rxjs';

 const options ={
  headers:new HttpHeaders
}
@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  constructor(private http:HttpClient) { 
  }
//saveDetails()- to store data in localstorage
 

  // get data from local storage

 
  // register
  register(acno:any,username:any,password:any,phonenumber:any,gmail:any){

   // req body

   const data={
    acno,
    username,
    password,
    phonenumber,
    gmail
   }
    // register api -asychronous
    return this.http.post('http://localhost:3000/register',data)
  }
  // login
  login(acno:any,pswd:any){
// req body

const data={
  acno,
 pswd
 }
  // register api -asychronous
  return this.http.post('http://localhost:3000/login',data)
    
  }

  // to get request header with token
  getToken(){
    // fetch the token from local storage
    const token =JSON.parse(localStorage.getItem('token') || '')
    // generate request header - HttpHeader
    let headers = new HttpHeaders()
    // append token inside header
    if(token){
      headers = headers.append('x-access-token',token)
      // implement overloading
      options.headers=headers
    }
    return options
  }

  // deposit 
  deposit(acno:any,pswd:any,amt:any){
   
// req body

const data={
  acno,
 pswd,
 amt
 }
  // register api -asychronous
  return this.http.post('http://localhost:3000/deposit',data,this.getToken())
    
    }

    // withdraw
    
  withdrawal(acno:any,pswd:any,amt:any){
    // req body

    const data={
      acno,
     pswd,
     amt
     }
      // register api -asychronous
      return this.http.post('http://localhost:3000/withdrawal',data,this.getToken())
      }
// transction

getTransaction(acno:any){
// req body

const data={
  acno
 }
  // register api -asychronous
  return this.http.post('http://localhost:3000/transaction',data,this.getToken())
}
onDelete(acno:any){
 
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno)
  }
  }

