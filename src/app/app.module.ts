import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuprojectComponent } from './menuproject/menuproject.component';
import { AddrowComponent } from './addrow/addrow.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ProductComponent } from './product/product.component';
import {CommonModule} from '@angular/common'
import { ToastrModule } from 'ngx-toastr';
import { InventryComponent } from './inventry/inventry.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionComponent } from './collection/collection.component';
import { InterfaceComponent } from './interface/interface.component';
import { ClassesComponent } from './classes/classes.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuprojectComponent,
    AddrowComponent,
    ProductComponent,
    InventryComponent,
    FormComponent,
    ListComponent,
    DashboardComponent,
    CollectionComponent,
    InterfaceComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
