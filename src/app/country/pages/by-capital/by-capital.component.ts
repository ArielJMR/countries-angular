import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent {

  countries: Country[] = [];
  error = false;

  constructor(private countryService: CountryService) { }

  search(inputText: string): void {
    if (inputText.length > 0) {
      this.countryService.searchByCapital(inputText).subscribe(result => {
        this.countries = result;
        if (this.error) this.error = false;
      }, () => {
        this.error = true;
        this.countries = [];
      });
    }
  }
}
