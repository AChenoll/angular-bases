import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayamarComponent } from './playamar.component';

describe('PlayamarComponent', () => {
  let component: PlayamarComponent;
  let fixture: ComponentFixture<PlayamarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayamarComponent]
    });
    fixture = TestBed.createComponent(PlayamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
