import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPlaceholderComponent } from './placeholder.component';

describe('GPlaceholderComponent', () => {
  let component: GPlaceholderComponent;
  let fixture: ComponentFixture<GPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'g-playground'`, () => {
    fixture = TestBed.createComponent(GPlaceholderComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('g-playground');
  });

  it('should render title', () => {
    fixture = TestBed.createComponent(GPlaceholderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('g-playground app is running!');
  });
});
