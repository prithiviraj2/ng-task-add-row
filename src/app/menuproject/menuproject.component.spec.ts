import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprojectComponent } from './menuproject.component';

describe('MenuprojectComponent', () => {
  let component: MenuprojectComponent;
  let fixture: ComponentFixture<MenuprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
