import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmInsertComponent } from './sm-insert.component';

describe('SmInsertComponent', () => {
  let component: SmInsertComponent;
  let fixture: ComponentFixture<SmInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
