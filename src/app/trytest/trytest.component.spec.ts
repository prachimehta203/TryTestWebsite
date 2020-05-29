import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrytestComponent } from './trytest.component';

describe('TrytestComponent', () => {
  let component: TrytestComponent;
  let fixture: ComponentFixture<TrytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
