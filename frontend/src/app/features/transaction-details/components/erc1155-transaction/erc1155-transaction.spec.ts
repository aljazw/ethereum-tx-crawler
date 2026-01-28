import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc1155Transaction } from './erc1155-transaction';

describe('Erc1155Transaction', () => {
  let component: Erc1155Transaction;
  let fixture: ComponentFixture<Erc1155Transaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erc1155Transaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erc1155Transaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
