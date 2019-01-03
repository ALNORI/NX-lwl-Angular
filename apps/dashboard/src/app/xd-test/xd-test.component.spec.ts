import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdTestComponent } from './xd-test.component';

describe('XdTestComponent', () => {
  let component: XdTestComponent;
  let fixture: ComponentFixture<XdTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
