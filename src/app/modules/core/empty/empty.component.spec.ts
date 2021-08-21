import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GEmptyComponent } from './empty.component';

describe('EmptyComponent', () => {
  let component: GEmptyComponent;
  let fixture: ComponentFixture<GEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
