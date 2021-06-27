import { CoreModule } from './../../core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [FilterComponent, HomeComponent, DetailsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CoreModule],
})
export class HomeModule {}
