import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesDialogComponent } from './entities-dialog.component';

describe('EntitiesDialogComponent', () => {
  let component: EntitiesDialogComponent;
  let fixture: ComponentFixture<EntitiesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
