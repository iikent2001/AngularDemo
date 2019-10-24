import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSearchComponent } from './sm-search.component';

describe('SmSearchComponent', () => {
  let component: SmSearchComponent;
  let fixture: ComponentFixture<SmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
