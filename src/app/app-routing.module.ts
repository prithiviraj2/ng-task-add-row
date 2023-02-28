import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuprojectComponent } from './menuproject/menuproject.component';
import { AddrowComponent } from './addrow/addrow.component';
import { ProductComponent } from './product/product.component';
import { InventryComponent } from './inventry/inventry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CollectionComponent } from './collection/collection.component';
const routes: Routes = [
  {path:'menuproject',component:MenuprojectComponent},
  {path:'addrow',component:AddrowComponent},
  {path:'product',component:ProductComponent},
  {path:'inventry',component:InventryComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'form',component:FormComponent},
  {path:'list',component:ListComponent},
  {path:'collection',component:CollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
