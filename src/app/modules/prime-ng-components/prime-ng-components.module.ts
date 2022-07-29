import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';



const PrimeNgComponents = [
  ButtonModule,
  TableModule,
  DropdownModule,
  InputTextModule,
  CalendarModule
]

@NgModule({
  declarations: [],
  imports: [
    PrimeNgComponents
  ],
  exports: [
    PrimeNgComponents
  ]
})
export class PrimeNgComponentsModule { }
