import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStatistiquesComponent } from './liste-statistiques.component';

describe('ListeStatistiquesComponent', () => {
  let component: ListeStatistiquesComponent;
  let fixture: ComponentFixture<ListeStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeStatistiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
