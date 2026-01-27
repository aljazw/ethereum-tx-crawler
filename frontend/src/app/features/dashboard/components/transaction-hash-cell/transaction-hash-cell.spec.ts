import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHashCell } from './transaction-hash-cell';

describe('TransactionHashCell', () => {
  let component: TransactionHashCell;
  let fixture: ComponentFixture<TransactionHashCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionHashCell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionHashCell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
