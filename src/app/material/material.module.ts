import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { MatDatepickerModule } from "@angular/material/datepicker";
import {  MatDialogModule } from "@angular/material/dialog";

import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";


const matModules = [MatDatepickerModule,MatProgressSpinnerModule,MatPaginatorModule,MatTableModule, MatSortModule, MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule, MatDialogModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModules
  ],
  exports : [
  ...matModules
  ]
})
export class MaterialModule { }
