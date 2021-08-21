import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GFooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: GFooterComponent;
  let fixture: ComponentFixture<GFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
