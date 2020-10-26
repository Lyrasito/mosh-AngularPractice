import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewCourseFormComponent } from './new-course-form.component';

describe('NewCourseFormComponent', () => {
  let component: NewCourseFormComponent;
  let fixture: ComponentFixture<NewCourseFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
