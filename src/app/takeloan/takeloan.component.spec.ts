import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeloanComponent } from './takeloan.component';

describe('TakeloanComponent', () => {
  let component: TakeloanComponent;
  let fixture: ComponentFixture<TakeloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
