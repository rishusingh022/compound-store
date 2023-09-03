import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compound, CompoundResponse } from '../constant/type';
import BASE_URL from '../constant/apiEndpoints';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class CompoundService {
  private BASE_URL = BASE_URL;
  constructor(private http:HttpClient) { }

  getCompounds(page:number): Observable<CompoundResponse> {
    // console.log(this.BASE_URL + '?pg=' + `${page}`);
    // console.log(this.http.get<CompoundResponse>(this.BASE_URL + '?pg=' + `${page}`));
    return this.http.get<CompoundResponse>(this.BASE_URL + '?pg=' + `${page}`);
  }

  getCompound(id:string): Observable<Compound> {
    return this.http.get<Compound>(this.BASE_URL + '/' + id);
  }

  addCompound(compound:Compound): Observable<Compound> {
    return this.http.post<Compound>(this.BASE_URL, compound, httpOptions);
  }

  updateCompound(compound:Compound): Observable<Compound> {
    return this.http.put<Compound>(this.BASE_URL + '/' + compound.id, compound, httpOptions);
  }

  deleteCompound(id:string): Observable<Compound> {
    return this.http.delete<Compound>(this.BASE_URL + '/' + id);
  }

}
