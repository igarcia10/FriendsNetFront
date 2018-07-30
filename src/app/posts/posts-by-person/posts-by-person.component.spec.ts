import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsByPersonComponent } from './posts-by-person.component';

describe('PostsByPersonComponent', () => {
  let component: PostsByPersonComponent;
  let fixture: ComponentFixture<PostsByPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsByPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsByPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
