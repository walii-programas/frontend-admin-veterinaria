import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class GlobalAuthService {
  
  constructor() {}

  // public variables
  public urlApiAdmin = 'http://localhost:8000/api';

  // public metods
  public getFormUrlEncoded(toConvert:any) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  public getHeaders() {
    return new HttpHeaders({
      'Authorization': 'Bearer' + localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  // public getLoginStatus():boolean{
  //   if(localStorage.getItem('token') !== null){
  //       let current = new Date(localStorage.getItem('expires_in'));
  //       let actual = new Date();
  //       if (actual < current) {
  //           return true;
  //       } else{
  //           return false;
  //       }
  //   }
  //   return false;
  // }
}