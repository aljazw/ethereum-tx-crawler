import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc721Transaction } from './erc721-transaction';

describe('Erc721Transaction', () => {
  let component: Erc721Transaction;
  let fixture: ComponentFixture<Erc721Transaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erc721Transaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erc721Transaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
