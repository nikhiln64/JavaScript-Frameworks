import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AppearalsComponent } from './appearals/appearals.component';
import { FootwearComponent } from './footwear/footwear.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from './productservice';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        MobilesComponent,
        AppearalsComponent,
        FootwearComponent,
        NotFoundComponent,
        RouterOutlet
      ],
      imports: [HttpModule],
      providers: [ProductService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'All In Once Store'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('All In Once Store');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to All In Once Store!');
  }));
});
