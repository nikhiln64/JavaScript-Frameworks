import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesComponent } from './mobiles.component';
import { ProductService } from '../productservice';
import { HttpModule } from '@angular/http/src/http_module';

describe('MobilesComponent', () => {
  let component: MobilesComponent;
  let fixture: ComponentFixture<MobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesComponent ],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
