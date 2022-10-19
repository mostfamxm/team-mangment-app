import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraniningGamesCalnderComponent } from './tranining-games-calnder.component';

describe('TraniningGamesCalnderComponent', () => {
  let component: TraniningGamesCalnderComponent;
  let fixture: ComponentFixture<TraniningGamesCalnderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraniningGamesCalnderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraniningGamesCalnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
