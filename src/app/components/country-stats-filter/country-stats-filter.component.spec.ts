import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatsFilterComponent } from './country-stats-filter.component';

describe('CountryStatsFilterComponent', () => {
  let component: CountryStatsFilterComponent;
  let fixture: ComponentFixture<CountryStatsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryStatsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryStatsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
