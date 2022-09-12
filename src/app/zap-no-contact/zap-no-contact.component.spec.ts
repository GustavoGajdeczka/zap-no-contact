import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapNoContactComponent } from './zap-no-contact.component';

describe('ZapNoContactComponent', () => {
  let component: ZapNoContactComponent;
  let fixture: ComponentFixture<ZapNoContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapNoContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapNoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
