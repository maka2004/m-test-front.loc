import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, News } from '../../core/services/news';
import { Item } from './item/item';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, Item],
  templateUrl: './list.html'
})
export class NewsList {
  newsList = signal<News[]>([]);
  filter = signal('');

  constructor(private newsService: NewsService) {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNewsList(this.filter()).subscribe(data => {
      this.newsList.set(data);
    });
  }

  onFilterChange(value: string) {
    this.filter.set(value);
    this.loadNews();
  }
}