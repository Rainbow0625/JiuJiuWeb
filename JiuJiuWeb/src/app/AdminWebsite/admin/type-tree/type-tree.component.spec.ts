import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTreeComponent } from './type-tree.component';

describe('TypeTreeComponent', () => {
  let component: TypeTreeComponent;
  let fixture: ComponentFixture<TypeTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


