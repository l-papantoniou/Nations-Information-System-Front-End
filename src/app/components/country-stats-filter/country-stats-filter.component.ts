import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { CountryStatsService, CountryStats } from '../../services/country-stats.service';
import { RegionService, Region } from '../../services/region.service';

@Component({
  selector: 'app-country-stats-filter',
  templateUrl: './country-stats-filter.component.html',
  styleUrls: ['./country-stats-filter.component.css'],
  standalone: true,
  imports: [FormsModule] // Add FormsModule to imports
})
export class CountryStatsFilterComponent implements OnInit {
  regions: Region[] = [];
  countryStats: CountryStats[] = [];
  filteredStats: CountryStats[] = [];
  selectedRegion: number = 0;
  dateFrom: string = '';
  dateTo: string = '';

  constructor(
    private countryStatsService: CountryStatsService,
    private regionService: RegionService
  ) { }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe(data => {
      this.regions = data;
    });

    this.countryStatsService.getCountryStats().subscribe(data => {
      this.countryStats = data;
      this.filteredStats = data;
    });
  }

  filterResults(): void {
    this.filteredStats = this.countryStats.filter(stat => {
      return (!this.selectedRegion || stat.regionId === this.selectedRegion) &&
        (!this.dateFrom || new Date(stat.year) >= new Date(this.dateFrom)) &&
        (!this.dateTo || new Date(stat.year) <= new Date(this.dateTo));
    });
  }
}
