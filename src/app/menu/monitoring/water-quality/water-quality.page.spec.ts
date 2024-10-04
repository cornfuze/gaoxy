import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaterQualityPage } from './water-quality.page';

describe('WaterQualityPage', () => {
  let component: WaterQualityPage;
  let fixture: ComponentFixture<WaterQualityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterQualityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
