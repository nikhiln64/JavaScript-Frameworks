import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AppearalsComponent } from './appearals/appearals.component';
import { FootwearComponent } from './footwear/footwear.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { ProductService } from './productservice';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  { path: '', component: MobilesComponent },
  { path: 'appearals',  component: AppearalsComponent },
  { path: 'footwear', component: FootwearComponent },
  { path: '**',     component: NotFoundComponent }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        MobilesComponent,
        AppearalsComponent,
        FootwearComponent,
        NotFoundComponent
      ],
      imports: [ HttpModule, RouterModule.forRoot(routes), APP_BASE_HREF],
      providers: [ProductService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'All In One Store'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('All In One Store');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to All In One Store!');
  }));
});
