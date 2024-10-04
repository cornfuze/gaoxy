import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaterStatPage } from './water-stat.page';

describe('WaterStatPage', () => {
  let component: WaterStatPage;
  let fixture: ComponentFixture<WaterStatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
