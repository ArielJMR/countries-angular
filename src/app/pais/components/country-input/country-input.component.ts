import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder = '';
  @Output() submit = new EventEmitter<string>();

  debouncer$: Subject<string> = new Subject();

  inputText = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer$.pipe(debounceTime(400)).subscribe(value => {
      this.submit.emit(value);
    })
  }

  submitForm(): void {
    this.submit.emit(this.inputText);
  }

  press(): void {
    this.debouncer$.next(this.inputText);
  }

}
