import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AppearalsComponent } from './appearals/appearals.component';
import { FootwearComponent } from './footwear/footwear.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductService } from './productservice';

const routes: Routes = [
  { path: '', component: MobilesComponent },
  { path: 'appearals',  component: AppearalsComponent },
  { path: 'footwear', component: FootwearComponent },
  { path: '**',     component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MobilesComponent,
    AppearalsComponent,
    FootwearComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
