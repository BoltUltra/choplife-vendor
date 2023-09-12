import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListTableComponent } from './food-list-table.component';

describe('FoodListTableComponent', () => {
  let component: FoodListTableComponent;
  let fixture: ComponentFixture<FoodListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
