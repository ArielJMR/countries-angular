import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent implements OnInit {

  regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva = '';
  countries: Country[] = [];
  error = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    if (region.length > 0) {
      this.countryService.getCountriesByRegion(region).subscribe(countries => {
        this.countries = countries
        if (this.error) this.error = false;
      }, () => {
        this.error = true;
        this.countries = [];
      });
    }
  }

}
