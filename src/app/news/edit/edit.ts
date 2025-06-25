import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../core/services/news';

@Component({
  selector: 'app-news-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.html'
})
export class NewsEdit implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private newsService = inject(NewsService);

  title = signal('');
  content = signal('');
  error = signal<string | null>(null);
  isLoading = signal(true);

  private newsId: number = 0;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id || isNaN(id)) {
      this.error.set('Некорректный ID');
      return;
    }

    this.newsId = id;

    this.newsService.getNewsById(id).subscribe({
      next: (news) => {
        this.title.set(news.title);
        this.content.set(news.content);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Не удалось загрузить статью');
        this.isLoading.set(false);
      }
    });
  }

  onSubmit() {
    const updated = {
      title: this.title(),
      content: this.content()
    };

    this.newsService.updateNews(this.newsId, updated).subscribe({
      next: () => {
        this.router.navigate(['/news', this.newsId]);
      },
      error: () => {
        this.error.set('Не удалось сохранить изменения');
      }
    });
  }

  get titleValue() {
    return this.title().trim();
  }

  set titleValue(val: string) {
    this.title.set(val);
  }

  get contentValue() {
    return this.content();
  }

  set contentValue(val: string) {
    this.content.set(val);
  }
}