import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Menu } from '../models/menu';
import { Content } from '../models/content';
import { ItemCategory } from '../models/itemCategory';
import { Section } from '../models/section';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class DataFrontpageService {
  private apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }
  public getMensajeBienvenida(idCareer:number){
    return this.httpClient.get<Content [] >(this.apiUrl+'utils/welcome_message/?university_career_id='+idCareer, this.httpOptions);
  }
  public getMenu() { 
    return this.httpClient.get<Menu[]>(this.apiUrl+'utils/menu_item/', this.httpOptions);
  }
  public getMallaCareer(idCareer:number){
    return this.httpClient.get(this.apiUrl+'utils/detailed_subject_matters/?university_career_id='+idCareer,this.httpOptions);
  }
  public getRequirements(){
    return this.httpClient.get(this.apiUrl+'requirement/',this.httpOptions);
  }
  public getMessages(id:number){
    return this.httpClient.get<Content [] >(this.apiUrl+'utils/news/?university_career_id='+id,this.httpOptions);
  }
  public getSeccionesCareer(idCareer:number){
    return this.httpClient.get<Section[]>(this.apiUrl+'utils/university_career_sections/?university_career_id='+idCareer,this.httpOptions);
  }
  public getPersonCareer(idCareer:number){
    return this.httpClient.get<any[]>(this.apiUrl+'utils/university_career_authorities/?university_career_id='+idCareer,this.httpOptions);
  }
  public getTestimonios(id:number){
    return this.httpClient.get<Content[]>(this.apiUrl+'utils/testimonials/?university_career_id='+id, this.httpOptions);
   }

  /*
  public getMensajes(){
    return this.httpClient.get<Content[]>(this.apiUrl+'itemcategoryMensajes/', this.httpOptions);
   }

  //public getDataQuienesSomos(){
    //return this.httpClient.get<InfoSite[]>(this.apiUrl+'infoSiteQuienesSomos/', this.httpOptions);
   //}
  
 
  */
}
