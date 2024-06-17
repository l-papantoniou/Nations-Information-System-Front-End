import { Component, OnInit } from '@angular/core';
import { CountryStatsService, CountryStats } from '../../services/country-stats.service';

@Component({
  selector: 'app-country-stats-list',
  templateUrl: './country-stats-list.component.html',
  styleUrls: ['./country-stats-list.component.css']
})
export class CountryStatsListComponent implements OnInit {
  countryStats: CountryStats[] = [];

  constructor(private countryStatsService: CountryStatsService) { }

  ngOnInit(): void {
    this.countryStatsService.getCountryStats().subscribe(data => {
      this.countryStats = data;
    });
  }
}
