import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthTransaction } from './eth-transaction';

describe('EthTransaction', () => {
  let component: EthTransaction;
  let fixture: ComponentFixture<EthTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthTransaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthTransaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
