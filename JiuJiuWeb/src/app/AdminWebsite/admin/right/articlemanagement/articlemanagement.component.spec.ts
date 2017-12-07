import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlemanagementComponent } from './articlemanagement.component';

describe('ArticlemanagementComponent', () => {
  let component: ArticlemanagementComponent;
  let fixture: ComponentFixture<ArticlemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
