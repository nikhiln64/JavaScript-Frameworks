import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearComponent } from './footwear.component';
import { ProductService } from '../productservice';
import { HttpModule } from '@angular/http/src/http_module';

describe('FootwearComponent', () => {
  let component: FootwearComponent;
  let fixture: ComponentFixture<FootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootwearComponent ],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
