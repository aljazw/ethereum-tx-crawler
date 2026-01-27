import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc721Table } from './erc721-table';

describe('Erc721Table', () => {
  let component: Erc721Table;
  let fixture: ComponentFixture<Erc721Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erc721Table]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erc721Table);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
