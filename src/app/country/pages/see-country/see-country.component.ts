import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss']
})
export class SeeCountryComponent implements OnInit {

  code = '';
  country!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['code']) this.code = params['code'];
    });
    this.getCountry();
  }

  getCountry(): void {
    this.countryService.getCountryByCode(this.code).subscribe(country => {
      this.country = country[0];
    });
  }

}
