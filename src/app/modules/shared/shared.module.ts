import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    AppRoutingModule ,
    MatMenuModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    AppRoutingModule,
    MatMenuModule
  ]
})
export class SharedModule { }
