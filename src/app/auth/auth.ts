import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://m-test-back.loc/api';
  private loggedInSignal = signal<boolean>(!!localStorage.getItem('token'));
  loggedIn = this.loggedInSignal.asReadonly();

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .subscribe({
        next: res => {
          localStorage.setItem('token', res.token);
          this.loggedInSignal.set(true);
          this.router.navigate(['/news']);
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}