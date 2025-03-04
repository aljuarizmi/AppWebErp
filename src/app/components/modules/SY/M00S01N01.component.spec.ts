import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M00S01N01Component } from '../M00S01N01.component';

describe('M00S01N01Component', () => {
  let component: M00S01N01Component;
  let fixture: ComponentFixture<M00S01N01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M00S01N01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M00S01N01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
