import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingIdComponent } from './listing-id.component';

describe('ListingIdComponent', () => {
  let component: ListingIdComponent;
  let fixture: ComponentFixture<ListingIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
