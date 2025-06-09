import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDescription } from './amount-description';

describe('AmountDescription', () => {
  let component: AmountDescription;
  let fixture: ComponentFixture<AmountDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
