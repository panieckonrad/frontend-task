import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {freeApiService} from 'src/services/freeapi.service';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTableComponent } from './my-table/my-table.component';
import {MatButtonModule} from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    MyDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,  // input boxes
    MatPaginatorModule, // pagination
    MatProgressSpinnerModule, 
    MatSortModule,  // sortable headers
    MatTableModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule 

  ],
  entryComponents:[
    MyDialogComponent,
  ],
  providers: [freeApiService], // it is available to all the components in the app
  bootstrap: [AppComponent]
})
export class AppModule { }
