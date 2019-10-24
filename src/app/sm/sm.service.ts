import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SM } from './sm.model';
const headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
@Injectable({
  providedIn: 'root'
})
export class SMService {

  constructor(private httpClient:HttpClient) { }

  searchSMId(id : string) :Observable<SM>{
    return this.httpClient.post<SM>("/SM/searchSMId",id,{headers});
  }

  getSMs(sm: SM) : Observable<SM>{
    return this.httpClient.post<SM>("/SM/SMs",sm,{headers});
  }

  insertSM(sm:SM) :Observable<SM>{
    return this.httpClient.post<SM>("/SM/SMInsert",sm,{headers});
  }

  deleteSM(sm:SM){
    return this.httpClient.post<SM>("/SM/SMDelete",sm,{headers});
  }

  editSM(sm:SM){
    return this.httpClient.post<SM>("/SM/SMEdit",sm,{headers});
  }

  
}
