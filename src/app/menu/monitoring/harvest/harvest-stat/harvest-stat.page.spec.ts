import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarvestStatPage } from './harvest-stat.page';

describe('HarvestStatPage', () => {
  let component: HarvestStatPage;
  let fixture: ComponentFixture<HarvestStatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
