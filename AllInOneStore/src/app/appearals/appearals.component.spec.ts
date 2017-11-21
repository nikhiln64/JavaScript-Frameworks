import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearalsComponent } from './appearals.component';
import { ProductService } from '../productservice';

describe('AppearalsComponent', () => {
  let component: AppearalsComponent;
  let fixture: ComponentFixture<AppearalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearalsComponent ],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
