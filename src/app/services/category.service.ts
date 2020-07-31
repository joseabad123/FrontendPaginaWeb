import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  

  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('ACCESS_TOKEN'))
    
    }
  )
      
  }
  
  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;

  }
  
  public createCategory(category: Category) {
    return this.httpClient.post(this.apiUrl+'category/', category, this.httpOptions);
  }
    
  public updateCategory(category: Category) {
    return this.httpClient.put(this.apiUrl+'category/'+category.category_id+'/', category,this.httpOptions);
  }

  public deleteCategory(id: number) { 
    return this.httpClient.delete(this.apiUrl+'category/'+id+'/', this.httpOptions);
  }

  public getCategories() { 
    //console.log(localStorage.getItem('ACCESS_TOKEN'));
    return this.httpClient.get<Category[]>(this.apiUrl+'category/', this.httpOptions);
  }

}

