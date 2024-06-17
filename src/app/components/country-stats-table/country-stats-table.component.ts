import { Component, OnInit } from '@angular/core';
import { CountryStatsService, CountryStats } from '../../services/country-stats.service';

@Component({
  selector: 'app-country-stats-table',
  templateUrl: './country-stats-table.component.html',
  styleUrls: ['./country-stats-table.component.css']
})
export class CountryStatsTableComponent implements OnInit {
  countryStats: CountryStats[] = [];

  constructor(private countryStatsService: CountryStatsService) { }

  ngOnInit(): void {
    this.countryStatsService.getCountryStats().subscribe(data => {
      this.countryStats = data.filter((stat, index, self) =>
          index === self.findIndex((s) => (
            s.countryId === stat.countryId && s.gdp / s.population === Math.max(...self.filter(ss => ss.countryId === stat.countryId).map(ss => ss.gdp / ss.population))
          ))
      );
    });
  }
}
