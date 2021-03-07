import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProfComponent } from './login-prof.component';

describe('LoginProfComponent', () => {
  let component: LoginProfComponent;
  let fixture: ComponentFixture<LoginProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
