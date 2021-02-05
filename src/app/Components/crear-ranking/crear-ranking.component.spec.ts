import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRankingComponent } from './crear-ranking.component';

describe('CrearRankingComponent', () => {
  let component: CrearRankingComponent;
  let fixture: ComponentFixture<CrearRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
