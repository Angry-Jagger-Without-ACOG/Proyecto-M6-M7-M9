import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRankingComponent } from './modificar-ranking.component';

describe('ModificarRankingComponent', () => {
  let component: ModificarRankingComponent;
  let fixture: ComponentFixture<ModificarRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
