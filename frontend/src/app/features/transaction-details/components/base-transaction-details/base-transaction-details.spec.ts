import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTransactionDetails } from './base-transaction-details';

describe('BaseTransactionDetails', () => {
  let component: BaseTransactionDetails;
  let fixture: ComponentFixture<BaseTransactionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseTransactionDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTransactionDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
