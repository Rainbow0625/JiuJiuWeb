import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraperyComponent } from './grapery.component';

describe('SidebarComponent', () => {
  let component: GraperyComponent;
  let fixture: ComponentFixture<GraperyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraperyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraperyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
