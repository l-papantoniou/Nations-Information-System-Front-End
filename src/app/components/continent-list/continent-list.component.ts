import { Component, OnInit } from '@angular/core';
import { CountryService, Country } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }
}
