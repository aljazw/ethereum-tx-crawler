import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc1155Table } from './erc1155-table';

describe('Erc1155Table', () => {
  let component: Erc1155Table;
  let fixture: ComponentFixture<Erc1155Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erc1155Table]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erc1155Table);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
