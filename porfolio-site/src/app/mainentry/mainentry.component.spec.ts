import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainentryComponent } from './mainentry.component';

describe('MainentryComponent', () => {
  let component: MainentryComponent;
  let fixture: ComponentFixture<MainentryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainentryComponent]
    });
    fixture = TestBed.createComponent(MainentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
