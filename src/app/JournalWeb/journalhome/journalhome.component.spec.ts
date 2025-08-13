/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JournalhomeComponent } from './journalhome.component';

describe('JournalhomeComponent', () => {
  let component: JournalhomeComponent;
  let fixture: ComponentFixture<JournalhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
