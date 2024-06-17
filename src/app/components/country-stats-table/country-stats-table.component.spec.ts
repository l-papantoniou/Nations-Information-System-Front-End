import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatsTableComponent } from './country-stats-table.component';

describe('CountryStatsTableComponent', () => {
  let component: CountryStatsTableComponent;
  let fixture: ComponentFixture<CountryStatsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryStatsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
