import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyRecord } from '../models/company-record.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyRecordAppService {

  readonly baseURL = "http://localhost:5102/CompanyRecords";
  list: CompanyRecord[]=[];

  constructor(private http: HttpClient) { }

  companyRecordData: CompanyRecord = new CompanyRecord();

  postCompanyRecord() {
    return this.http.post(this.baseURL, this.companyRecordData);
  }

  putCompanyRecord() {
    return this.http.put(`${this.baseURL}/${this.companyRecordData.id}`, this.companyRecordData);
  }

  GetCompanyRecord(id: number): Observable<CompanyRecord> {
    return this.http.get<CompanyRecord>(`${this.baseURL}/${id}`);
  }

  GetCompanyRecords(): Observable<CompanyRecord[]> {
    return this.http.get<CompanyRecord[]>(this.baseURL);
  }

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => {
      this.list = res as CompanyRecord[]
    });
  }
}
