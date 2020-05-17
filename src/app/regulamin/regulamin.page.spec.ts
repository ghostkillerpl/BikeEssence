import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulaminPage } from './regulamin.page';

describe('RegulaminPage', () => {
  let component: RegulaminPage;
  let fixture: ComponentFixture<RegulaminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulaminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulaminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
