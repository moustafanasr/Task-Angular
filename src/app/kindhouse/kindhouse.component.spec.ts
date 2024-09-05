import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindhouseComponent } from './kindhouse.component';

describe('KindhouseComponent', () => {
  let component: KindhouseComponent;
  let fixture: ComponentFixture<KindhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KindhouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KindhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
