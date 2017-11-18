import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Product } from './product';
import { ProductService } from './productservice';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DataTemplateComponent } from './data-template/data-template.component';

@NgModule({
  declarations: [AppComponent,NavigationComponent,DataTemplateComponent],
  imports: [BrowserModule,HttpModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
