import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubProfileComponent } from './github-profile.component';

describe('GithubProfileComponent', () => {
  let component: GithubProfileComponent;
  let fixture: ComponentFixture<GithubProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
