import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatsListComponent } from './country-stats-list.component';

describe('CountryStatsListComponent', () => {
  let component: CountryStatsListComponent;
  let fixture: ComponentFixture<CountryStatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryStatsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
