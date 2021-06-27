import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filterForm: FormGroup;

  launchYears = [
    2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
    2009, 2008, 2007, 2006,
  ];
  constructor() {}

  ngOnInit(): void {}

  setFormValues(formName: any, value: any) {
    let formYearVal = '';
    if (this.filterForm.value[formName] !== value) {
      formYearVal = value;
    }
    this.filterForm.patchValue({
      [formName]: formYearVal,
    });
    console.log(this.filterForm);
  }
}
