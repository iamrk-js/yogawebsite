import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaDashboardComponent } from './yoga-dashboard.component';

describe('YogaDashboardComponent', () => {
  let component: YogaDashboardComponent;
  let fixture: ComponentFixture<YogaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
