import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSubmitComponent } from './profile-submit.component';

describe('ProfileSubmitComponent', () => {
  let component: ProfileSubmitComponent;
  let fixture: ComponentFixture<ProfileSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
