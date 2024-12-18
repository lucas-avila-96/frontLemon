import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesClaseComponent } from './detalles-clase.component';

describe('DetallesClaseComponent', () => {
  let component: DetallesClaseComponent;
  let fixture: ComponentFixture<DetallesClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesClaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
