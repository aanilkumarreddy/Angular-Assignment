import { SpaceXService } from './../../services/space-x.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filterForm: FormGroup;
  spaceXRecords: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private spaceXService: SpaceXService
  ) {
    this.filterForm = formBuilder.group({
      launch_year: [''],
      launch_success: [''],
      land_success: [''],
    });
  }

  ngOnInit(): void {
    this.getSpaceXRecords({});
    this.filterForm.valueChanges.subscribe((res) => {
      this.getSpaceXRecords(res);
    });
  }

  getSpaceXRecords(formValues?: any) {
    let queryParams = '';
    Object.entries(formValues)?.forEach(([key, value]) => {
      if (value) {
        queryParams += `&${key}=${value}`;
      }
    });
    this.spaceXService.getLaunchPrograms(100, queryParams).subscribe(
      (res) => {
        console.log(res);
        this.spaceXRecords = res;
      },
      (err) => {
        console.log(err);
        this.spaceXRecords = [];
      }
    );
  }
}
