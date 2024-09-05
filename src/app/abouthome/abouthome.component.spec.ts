import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthomeComponent } from './abouthome.component';

describe('AbouthomeComponent', () => {
  let component: AbouthomeComponent;
  let fixture: ComponentFixture<AbouthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouthomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
