import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymanagementComponent } from './categorymanagement.component';

describe('CategorymanagementComponent', () => {
  let component: CategorymanagementComponent;
  let fixture: ComponentFixture<CategorymanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorymanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
