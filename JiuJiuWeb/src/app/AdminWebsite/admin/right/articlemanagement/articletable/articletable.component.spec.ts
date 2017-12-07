import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticletableComponent } from './articletable.component';

describe('ArticletableComponent', () => {
  let component: ArticletableComponent;
  let fixture: ComponentFixture<ArticletableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticletableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
