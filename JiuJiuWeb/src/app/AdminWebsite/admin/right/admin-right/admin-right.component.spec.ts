import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRightComponent } from './admin-right.component';

describe('AdminRightComponent', () => {
  let component: AdminRightComponent;
  let fixture: ComponentFixture<AdminRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
