import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxlayoutTestComponent } from './fxlayout-test.component';

describe('FxlayoutTestComponent', () => {
  let component: FxlayoutTestComponent;
  let fixture: ComponentFixture<FxlayoutTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxlayoutTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxlayoutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
