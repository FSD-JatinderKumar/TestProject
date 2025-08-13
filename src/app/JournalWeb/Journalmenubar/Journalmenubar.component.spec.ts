/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JournalmenubarComponent } from './Journalmenubar.component';

describe('JournalmenubarComponent', () => {
  let component: JournalmenubarComponent;
  let fixture: ComponentFixture<JournalmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
