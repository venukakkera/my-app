import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SruareComponent } from './sruare.component';

describe('SruareComponent', () => {
  let component: SruareComponent;
  let fixture: ComponentFixture<SruareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SruareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SruareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
