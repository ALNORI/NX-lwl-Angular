import { async, TestBed } from '@angular/core/testing';
import { Material2Module } from './material2.module';

describe('Material2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Material2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Material2Module).toBeDefined();
  });
});
