import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: GWelcomeComponent;
  let fixture: ComponentFixture<GWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
