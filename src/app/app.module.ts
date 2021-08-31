import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { OrdertableComponent } from './ordertable/ordertable.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    OrdertableComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    DxDataGridModule,
    MatDatepickerModule,MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
