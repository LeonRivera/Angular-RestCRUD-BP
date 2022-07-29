import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';


const PrimeNgComponents = [
  ButtonModule
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
export class PrimeNgModule { }
