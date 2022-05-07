import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
