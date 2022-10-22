import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPageNotFoundComponent } from './page-not-found.component';
import {TranslateModule} from '@ngx-translate/core';

describe('GPageNotFoundComponent', () => {
  let component: GPageNotFoundComponent;
  let fixture: ComponentFixture<GPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ GPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
