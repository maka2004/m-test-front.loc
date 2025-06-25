import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../../core/services/news';

@Component({
  selector: 'app-news-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view.html'
})
export class NewsView implements OnInit {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);

  news = signal<any>(null);
  isLoading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null && !isNaN(id)) {
      this.newsService.getNewsById(id).subscribe({
        next: (data) => {
          this.news.set(data);
          this.isLoading.set(false);
        },
        error: () => {
          this.error.set('Новость не найдена');
          this.isLoading.set(false);
        }
      });
    } else {
      this.error.set('Некорректный ID');
      this.isLoading.set(false);
    }
  }
}