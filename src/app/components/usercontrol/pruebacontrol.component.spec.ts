import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacontrolComponent } from './pruebacontrol.component';

describe('PruebacontrolComponent', () => {
  let component: PruebacontrolComponent;
  let fixture: ComponentFixture<PruebacontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebacontrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebacontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
