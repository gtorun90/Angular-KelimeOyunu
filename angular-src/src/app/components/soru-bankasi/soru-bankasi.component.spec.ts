import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoruBankasiComponent } from './soru-bankasi.component';

describe('SoruBankasiComponent', () => {
  let component: SoruBankasiComponent;
  let fixture: ComponentFixture<SoruBankasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoruBankasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoruBankasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
