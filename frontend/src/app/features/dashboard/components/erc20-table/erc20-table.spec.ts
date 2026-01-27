import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20Table } from './erc20-table';

describe('Erc20Table', () => {
  let component: Erc20Table;
  let fixture: ComponentFixture<Erc20Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erc20Table]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erc20Table);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
