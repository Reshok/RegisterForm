import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule} from '@angular/material/dialog';
import { ThiredComponent } from './third/thired.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FourthComponent } from './fourth/fourth.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThiredComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,MatDialogModule,MatGridListModule,
    MatIconModule,MatSidenavModule,MatIconModule,MatToolbarModule,
    ReactiveFormsModule,MatFormFieldModule,MatCardModule,MatInputModule,HttpClientModule,
    FormsModule,FlexLayoutModule,
    NgbModule,MatTableModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatInputModule
]
})
export class AppModule { }
