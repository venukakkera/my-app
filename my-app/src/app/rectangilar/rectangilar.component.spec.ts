import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangilarComponent } from './rectangilar.component';

describe('RectangilarComponent', () => {
  let component: RectangilarComponent;
  let fixture: ComponentFixture<RectangilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
