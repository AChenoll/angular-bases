import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzAdd } from './add.component';

describe('AddComponent', () => {
  let component: DbzAdd;
  let fixture: ComponentFixture<DbzAdd>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzAdd]
    });
    fixture = TestBed.createComponent(DbzAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
