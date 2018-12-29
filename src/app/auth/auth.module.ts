import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';

import {MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    AuthRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
