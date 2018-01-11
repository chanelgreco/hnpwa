import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopNavComponent,
    LoadingSpinnerComponent,
    FooterNavComponent
  ],
  exports: [
    TopNavComponent,
    LoadingSpinnerComponent,
    FooterNavComponent
  ]
})
export class UiModule { }
