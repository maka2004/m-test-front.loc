import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsView } from './view';

describe('View', () => {
  let component: NewsView;
  let fixture: ComponentFixture<NewsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
