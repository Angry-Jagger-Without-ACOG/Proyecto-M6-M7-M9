import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRankingComponent } from './ver-ranking.component';

describe('VerRankingComponent', () => {
  let component: VerRankingComponent;
  let fixture: ComponentFixture<VerRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
