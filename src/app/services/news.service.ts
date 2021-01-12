import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_Key:string="f8b78fdd6cfb42bab48e1e05a7ed58cd"

  constructor(private http:HttpClient) { 

  }
  getNews(){
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_Key}`);
  }
}
