import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingSoloComponent } from './ranking-solo.component';

describe('RankingSoloComponent', () => {
  let component: RankingSoloComponent;
  let fixture: ComponentFixture<RankingSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
