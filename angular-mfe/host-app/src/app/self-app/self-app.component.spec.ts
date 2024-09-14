import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAppComponent } from './self-app.component';

describe('SelfAppComponent', () => {
  let component: SelfAppComponent;
  let fixture: ComponentFixture<SelfAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfAppComponent]
    });
    fixture = TestBed.createComponent(SelfAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
