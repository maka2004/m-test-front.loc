import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface News {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://m-test-back.loc/api/news';

  constructor(private http: HttpClient) {}

  getNewsList(titleFilter: string = ''): Observable<News[]> {
    let params = new HttpParams();
    if (titleFilter) {
      params = params.set('title', titleFilter);
    }

    return this.http.get<News[]>(this.apiUrl, { params });
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  updateNews(id: number, data: Partial<News>): Observable<News> {
    return this.http.put<News>(`${this.apiUrl}/${id}`, data);
  }
}