import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfegirImatge } from './afegir-imatge';

describe('AfegirImatge', () => {
  let component: AfegirImatge;
  let fixture: ComponentFixture<AfegirImatge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfegirImatge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfegirImatge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
