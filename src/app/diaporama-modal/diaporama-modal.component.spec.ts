import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaporamaModalComponent } from './diaporama-modal.component';

describe('DiaporamaModalComponent', () => {
  let component: DiaporamaModalComponent;
  let fixture: ComponentFixture<DiaporamaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaporamaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaporamaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
