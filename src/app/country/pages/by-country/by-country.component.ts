import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent {

  countries: Country[] = [];
  error = false;

  constructor(private countryService: CountryService) { }

  search(inputText: string): void {
    if (inputText.length > 0) {
      this.countryService.searchByName(inputText).subscribe(result => {
        this.countries = result;
        if (this.error) this.error = false;
      }, () => {
        this.error = true;
        this.countries = [];
      });
    }
  }

}
