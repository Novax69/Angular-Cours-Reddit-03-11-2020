import { Component } from '@angular/core';
import {Article} from './components/article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article ('Angular','http://angular.io',10),
      new Article ('React','http://reactjs.org',10),
      new Article ('Angular homepage','http://angular.io',10)
    ]
  }



  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean {
    console.log(`Adding article title : ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value ='';
    link.value ='';
    return false;
  }
  title = 'reddit';
}
