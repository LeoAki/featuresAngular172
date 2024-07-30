import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalModelComponent } from './signal-model.component';

describe('SignalModelComponent', () => {
  let component: SignalModelComponent;
  let fixture: ComponentFixture<SignalModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
