import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentListComponent } from './components/continent-list/continent-list.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountryStatsTableComponent } from './components/country-stats-table/country-stats-table.component';
import { CountryStatsFilterComponent } from './components/country-stats-filter/country-stats-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [
    AppComponent,
    ContinentListComponent,
    CountryListComponent,
    CountryDetailsComponent,
    CountryStatsTableComponent,
    CountryStatsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    CommonModule // Add CommonModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
