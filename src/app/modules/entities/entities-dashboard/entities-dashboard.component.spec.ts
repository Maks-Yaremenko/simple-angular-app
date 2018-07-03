import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesDashboardComponent } from './entities-dashboard.component';

describe('EntitiesDashboardComponent', () => {
  let component: EntitiesDashboardComponent;
  let fixture: ComponentFixture<EntitiesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
