import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsResultsComponent } from './listings-results.component';

describe('ListingsResultsComponent', () => {
  let component: ListingsResultsComponent;
  let fixture: ComponentFixture<ListingsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
