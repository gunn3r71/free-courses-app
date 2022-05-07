import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'catalog/products/:id',
        component: CatalogComponent
      }
    ])
  ],
  providers: [
    CourseService
  ]
})
export class CourseModule { }