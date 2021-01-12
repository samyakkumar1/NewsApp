import { Component } from '@angular/core';
import { NewsService  } from 'src/app/services/news.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles:any;

  constructor(private newservice:NewsService,private router:Router) {
    this.loadNews();
  }

  loadNews(){
    this.newservice.getNews().subscribe(news =>{
      this.articles=news['articles'];
      console.log(this.articles)
    })
  }
  MoveToDetailsPage(){
    this.router.navigate(['/news-detail']);
  }

  

}