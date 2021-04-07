import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCoachComponent } from './sports-coach.component';

describe('SportsCoachComponent', () => {
  let component: SportsCoachComponent;
  let fixture: ComponentFixture<SportsCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
