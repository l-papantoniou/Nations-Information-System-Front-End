import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountryStatsTableComponent } from './components/country-stats-table/country-stats-table.component';
import { CountryStatsFilterComponent } from './components/country-stats-filter/country-stats-filter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountryListComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'country-details/:id', component: CountryDetailsComponent },
  { path: 'country-stats-table', component: CountryStatsTableComponent },
  { path: 'country-stats-filter', component: CountryStatsFilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
