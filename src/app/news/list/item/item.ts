import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../../../core/services/news';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item.html'
})
export class Item {
  @Input() news!: News;
}