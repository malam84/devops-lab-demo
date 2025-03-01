import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  _apiUrl: string = '';
  _enableFeatureX: boolean = false;

  private URL = 'assets/app-settings.json';

  constructor(private httpClient: HttpClient) {
  }

  // loadConfig(): Observable<any> {
  //   return this.httpClient.get(`../../assets/config/app-settings.json?v=${Math.random().toString().substring(2)}`).pipe(
  //     tap((data: any) => {
  //       this._apiUrl = data.apiUrl;
  //       console.log("///////////////");
  //       console.log(this._apiUrl);
  //       this._enableFeatureX = data.enableFeatureX;
  //     })
  //   );
  // }

  loadConfig(): Observable<any> {
    console.log("///////////////123");
    this.httpClient.get(this.URL).subscribe(console.log);
    console.log("///////////////456");
    return this.httpClient.get("./assets/app-settings.json").pipe(
      tap((data: any) => {
        this._apiUrl = data.apiUrl;
        console.log("///////////////");
        console.log(this._apiUrl);
        this._enableFeatureX = data.enableFeatureX;
      })
    );
  }

  getApiURL(): string {
    return this._apiUrl;
  }

  getEnableFeatureX(): boolean {
    return this._enableFeatureX;
  }
}
