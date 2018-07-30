import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearcherComponent } from './user-searcher.component';

describe('UserSearcherComponent', () => {
  let component: UserSearcherComponent;
  let fixture: ComponentFixture<UserSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
