import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Track1Page } from './track1.page';

describe('Track1Page', () => {
  let component: Track1Page;
  let fixture: ComponentFixture<Track1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Track1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Track1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
