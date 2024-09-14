import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"",
      component:DemoComponent
    }])
  ],
  exports:[
    RouterModule
  ]
})
export class DemoModule { }
