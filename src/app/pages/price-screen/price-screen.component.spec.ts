import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceScreenComponent } from './price-screen.component';

describe('PriceScreenComponent', () => {
  let component: PriceScreenComponent;
  let fixture: ComponentFixture<PriceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
