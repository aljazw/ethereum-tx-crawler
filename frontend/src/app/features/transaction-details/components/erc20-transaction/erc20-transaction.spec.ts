import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20Transaction } from './erc20-transaction';

describe('Erc20Transaction', () => {
  let component: Erc20Transaction;
  let fixture: ComponentFixture<Erc20Transaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erc20Transaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erc20Transaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
