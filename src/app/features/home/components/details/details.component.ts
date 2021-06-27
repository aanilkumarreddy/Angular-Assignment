import { SpaceXService } from './../../services/space-x.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() spaceXRecords: any;
  // spacePrograms: any = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    // this.getSpacePrograms(10);
  }

  // getSpacePrograms(limit: number) {
  //   this.spaceXService.getLaunchPrograms(limit).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       this.spacePrograms = res;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}
