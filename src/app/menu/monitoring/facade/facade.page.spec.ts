import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacadePage } from './facade.page';

describe('FacadePage', () => {
  let component: FacadePage;
  let fixture: ComponentFixture<FacadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FacadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
