import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateStatsComponent } from './user-update-stats.component';

describe('UserUpdateStatsComponent', () => {
  let component: UserUpdateStatsComponent;
  let fixture: ComponentFixture<UserUpdateStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdateStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
