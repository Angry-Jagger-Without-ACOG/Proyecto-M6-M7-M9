import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingGrupoComponent } from './ranking-grupo.component';

describe('RankingGrupoComponent', () => {
  let component: RankingGrupoComponent;
  let fixture: ComponentFixture<RankingGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
