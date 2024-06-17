import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService, Country, Language } from '../../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country: Country | undefined;
  languages: Language[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    const countryId = Number(this.route.snapshot.paramMap.get('id'));
    this.countryService.getCountries().subscribe(countries => {
      this.country = countries.find(c => c.id === countryId);
    });
    this.countryService.getCountryLanguages(countryId).subscribe(data => {
      this.languages = data;
    });
  }
}
