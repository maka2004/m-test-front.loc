import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEdit } from './edit';

describe('Edit', () => {
  let component: NewsEdit;
  let fixture: ComponentFixture<NewsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
