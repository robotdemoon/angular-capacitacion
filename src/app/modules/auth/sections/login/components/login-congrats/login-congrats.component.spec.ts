import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCongratsComponent } from './login-congrats.component';

describe('LoginCongratsComponent', () => {
  let component: LoginCongratsComponent;
  let fixture: ComponentFixture<LoginCongratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCongratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
