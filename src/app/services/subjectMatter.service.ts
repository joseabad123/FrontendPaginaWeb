import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SubjectMatter } from '../models/subject-matter';

@Injectable({
  providedIn: 'root'
})
export class SubjectMatterService {
  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('ACCESS_TOKEN'))
    })
  }
  constructor(private httpClient: HttpClient,) { 
    this.apiUrl = environment.apiUrl;

  }
  public createSubjectMatter(subject: SubjectMatter) {
    return this.httpClient.post(this.apiUrl+'subject_matter/', subject, this.httpOptions);
  }

  public updateSubjectMatter(subject: SubjectMatter) {
    return this.httpClient.put(this.apiUrl+'subject_matter/'+subject.subject_matter_id+'/', subject,this.httpOptions);
  }

  public deleteSubjectMatter(id: number) { 
    return this.httpClient.delete(this.apiUrl+'subject_matter/'+id+'/', this.httpOptions);
  }

  public getSubjectMatter() { 
    return this.httpClient.get<SubjectMatter[]>(this.apiUrl+'subject_matter/', this.httpOptions);
  }
}
