import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://ec2-18-228-43-17.sa-east-1.compute.amazonaws.com:3000/api";
    const AUTH_KEY: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTFhMjM1NjFhYzA3MjY1M2YzYjBlMTUiLCJuYW1lIjoiTWFudWVsIFNhbnRlbGljZXMiLCJlbWFpbCI6Im1zYW50ZWxpY2VzQGdlb2dyb3cuY2wiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1ODI3NTAzODl9.hgDlo-wj7J1P1r4_WqrbQOGiJFm72nS_eXO91xbK_Tw';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'text/json',
        'Authorization': AUTH_KEY
      })
    };
  }

  public get<type>(path: string): Observable<type> {
    return this.httpClient.get(this.baseUrl + path, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  } //Obtener datos

  public post<type>(path: string, body: any): Observable<type> {
    return this.httpClient.post(this.baseUrl + path, body, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  } //Crear datos

  public delete<type>(path: string): Observable<type> {
    return this.httpClient.delete(this.baseUrl + path, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  } //Borrar datos

  public patch<type>(path: string, body: any): Observable<type> {
    return this.httpClient.patch(this.baseUrl + path, body, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  } //Modificar datos
}
