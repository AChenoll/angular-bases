import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzLista } from './lista.component';

describe('ListaComponent', () => {
  let component: DbzLista;
  let fixture: ComponentFixture<DbzLista>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzLista]
    });
    fixture = TestBed.createComponent(DbzLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
