import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangTinTucComponent } from './trang-tin-tuc.component';

describe('TrangTinTucComponent', () => {
  let component: TrangTinTucComponent;
  let fixture: ComponentFixture<TrangTinTucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangTinTucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
