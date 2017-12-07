import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatetableComponent } from './catetable.component';

describe('CatetableComponent', () => {
  let component: CatetableComponent;
  let fixture: ComponentFixture<CatetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
