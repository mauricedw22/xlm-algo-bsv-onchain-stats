import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AngularCropperjsModule } from 'angular-cropperjs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AdvancedUiComponent } from './advanced-ui.component';
import { ImageCropperComponent } from './image-cropper/cropper.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';

const routes: Routes = [
  {
    path: '',
    component: AdvancedUiComponent,
    children: [
      {
        path: '',
        redirectTo: 'cropper',
        pathMatch: 'full'
      },
      {
        path: 'cropper',
        component: ImageCropperComponent
      },
      {
        path: 'owl-carousel',
        component: OwlCarouselComponent
      },
      {
        path: 'sweet-alert',
        component: SweetAlertComponent
      }
    ]
  }
]

@NgModule({
  declarations: [AdvancedUiComponent, ImageCropperComponent, OwlCarouselComponent, SweetAlertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularCropperjsModule,
    CarouselModule,
    SweetAlert2Module.forRoot(),
  ]
})
export class AdvancedUiModule { }