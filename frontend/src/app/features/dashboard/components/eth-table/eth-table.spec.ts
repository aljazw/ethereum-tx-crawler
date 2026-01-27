import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthTable } from './eth-table';

describe('EthTable', () => {
  let component: EthTable;
  let fixture: ComponentFixture<EthTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
