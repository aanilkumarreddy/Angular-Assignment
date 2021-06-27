import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, DetailsCardComponent],
  imports: [CommonModule, CoreModule, FlexLayoutModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FlexLayoutModule,
    DetailsCardComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
