import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


import {
  MatCardModule,
  MatGridListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  declarations: [TeacherListComponent]
})
export class HomeModule { }
