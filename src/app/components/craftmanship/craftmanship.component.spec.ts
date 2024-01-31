import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftmanshipComponent } from './craftmanship.component';

describe('CraftmanshipComponent', () => {
  let component: CraftmanshipComponent;
  let fixture: ComponentFixture<CraftmanshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CraftmanshipComponent]
    });
    fixture = TestBed.createComponent(CraftmanshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
