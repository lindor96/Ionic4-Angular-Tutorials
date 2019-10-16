import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIPage } from './cli.page';

describe('CLIPage', () => {
  let component: CLIPage;
  let fixture: ComponentFixture<CLIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
