import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class GlobalAuthService {
  
  constructor(private http: HttpClient) {}

  // public variables
  public urlApiAdmin = 'http://localhost:8000/api';

  public currentLoginStatus = 50

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
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  public getLoginStatus(): boolean {
    if(localStorage.getItem('token') !== null) {
        let current = new Date(Date.now() + (parseInt(localStorage.getItem('expires_in')) - 3600000));
        // let current = new Date(localStorage.getItem('expires_in'));
        let actual = new Date();
        if (actual > current) {
            return true;
        } else {
            return false;
        }
    }
    return false;
  }

  public logout() {
    return this.http.post(
      this.urlApiAdmin + '/auth/logout',
      {},
      {headers: this.getHeaders()}
    );
  }

  public refreshToken() {
    return this.http.post(
      this.urlApiAdmin + '/auth/refresh',
      {},
      {headers: this.getHeaders()}
    ).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res['token']);
    }, (err) => {
      console.log(err);
    });
  }

}
