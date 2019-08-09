import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSubmitReactiveComponent } from './profile-submit-reactive.component';

describe('ProfileSubmitReactiveComponent', () => {
  let component: ProfileSubmitReactiveComponent;
  let fixture: ComponentFixture<ProfileSubmitReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSubmitReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSubmitReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
