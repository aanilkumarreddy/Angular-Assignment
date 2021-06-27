import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  constructor(private httpClient: HttpClient) {}

  getLaunchPrograms(limit: number, extraParams?: String) {
    return this.httpClient.get(
      `https://api.spacexdata.com/v3/launches?limit=${limit}${extraParams}`
    );
  }
}
