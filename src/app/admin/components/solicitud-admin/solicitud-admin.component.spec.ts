import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAdminComponent } from './solicitud-admin.component';

describe('SolicitudAdminComponent', () => {
  let component: SolicitudAdminComponent;
  let fixture: ComponentFixture<SolicitudAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
