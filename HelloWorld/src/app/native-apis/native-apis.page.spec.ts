import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeAPIsPage } from './native-apis.page';

describe('NativeAPIsPage', () => {
  let component: NativeAPIsPage;
  let fixture: ComponentFixture<NativeAPIsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeAPIsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeAPIsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
